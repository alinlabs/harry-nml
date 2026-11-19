import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from '@/contexts/ThemeContext';
import {
  TERRITORY_NODES,
  TANGERANG_CLUSTERS,
  MAP_CATEGORY_TABS,
  TARGET_CATEGORY_POINTS,
  MapCategoryId,
} from './data';
import { JABODETABEK_BOUNDARIES, type RegionBoundaryProperties } from './jabodetabekBoundaries';

interface TerritoryMapProps {
  activePhaseNum: 1 | 2 | 3;
  language: 'in' | 'en';
  className?: string;
  showCategoryTabs?: boolean;
}

function fitMapToPhase(map: L.Map, phaseNum: 1 | 2 | 3, animate: boolean) {
  const size = map.getSize();
  if (size.x <= 0 || size.y <= 0) return;

  const activeLatLngs: L.LatLngExpression[] = TERRITORY_NODES.filter(
    (node) => node.minPhase <= phaseNum
  ).map((node) => [node.lat, node.lng]);

  if (activeLatLngs.length > 0) {
    const bounds = L.latLngBounds(activeLatLngs);
    map.fitBounds(bounds, {
      padding: [36, 36],
      maxZoom: phaseNum === 1 ? 11 : 10,
      animate,
    });
  }
}

export const TerritoryMap: React.FC<TerritoryMapProps> = ({
  activePhaseNum,
  language,
  className = 'territory-map-compact rounded-xl',
  showCategoryTabs = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabsBarRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileGroupRef = useRef<L.LayerGroup | null>(null);
  const boundaryGroupRef = useRef<L.LayerGroup | null>(null);
  const overlayGroupRef = useRef<L.LayerGroup | null>(null);
  const phaseRef = useRef<1 | 2 | 3>(activePhaseNum);
  const hasFittedRef = useRef<boolean>(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<MapCategoryId>('semua');

  phaseRef.current = activePhaseNum;

  // Initialize Leaflet map once
  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      center: [-6.25, 106.72],
      zoom: 10,
      minZoom: 9,
      maxZoom: 15,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: false,
      renderer: L.svg({ padding: 0.5 }),
    });

    const tileGroup = L.layerGroup().addTo(map);
    const boundaries = L.layerGroup().addTo(map);
    const overlays = L.layerGroup().addTo(map);
    mapRef.current = map;
    tileGroupRef.current = tileGroup;
    boundaryGroupRef.current = boundaries;
    overlayGroupRef.current = overlays;
    hasFittedRef.current = false;

    const syncMapSizeAndBounds = () => {
      map.invalidateSize({ animate: false });
      if (!hasFittedRef.current) {
        const size = map.getSize();
        if (size.x > 0 && size.y > 0) {
          fitMapToPhase(map, phaseRef.current, false);
          hasFittedRef.current = true;
        }
      }
    };

    syncMapSizeAndBounds();

    const resizeObserver = new ResizeObserver(() => {
      syncMapSizeAndBounds();
    });
    resizeObserver.observe(el);

    const timer1 = window.setTimeout(syncMapSizeAndBounds, 120);
    const timer2 = window.setTimeout(() => {
      map.invalidateSize({ animate: false });
    }, 520);

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
      tileGroupRef.current = null;
      boundaryGroupRef.current = null;
      overlayGroupRef.current = null;
      hasFittedRef.current = false;
    };
  }, []);

  // Update tile layer on theme change using free, keyless, label-free ArcGIS Canvas Base tiles
  useEffect(() => {
    const map = mapRef.current;
    const tileGroup = tileGroupRef.current;
    if (!map || !tileGroup) return;

    tileGroup.clearLayers();

    let errorCount = 0;
    let switchedToFallback = false;

    const attachFallback = (layer: L.TileLayer) => {
      layer.on('tileerror', () => {
        errorCount += 1;
        if (!switchedToFallback && errorCount >= 3 && tileGroupRef.current) {
          switchedToFallback = true;
          tileGroupRef.current.clearLayers();
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(tileGroupRef.current);
        }
      });
    };

    if (isDark) {
      const darkBase = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 16 }
      );
      attachFallback(darkBase);
      darkBase.addTo(tileGroup);
    } else {
      const whiteBase = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 16 }
      );
      attachFallback(whiteBase);
      whiteBase.addTo(tileGroup);
    }
  }, [isDark]);

  // Fit bounds when activePhaseNum changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const size = map.getSize();
    if (size.x > 0 && size.y > 0) {
      fitMapToPhase(map, activePhaseNum, hasFittedRef.current);
      hasFittedRef.current = true;
    }
  }, [activePhaseNum]);

  // Render regional administrative division lines (no text labels)
  useEffect(() => {
    const boundaryGroup = boundaryGroupRef.current;
    if (!boundaryGroup) return;

    boundaryGroup.clearLayers();

    L.geoJSON<RegionBoundaryProperties>(JABODETABEK_BOUNDARIES, {
      interactive: false,
      style: (feature) => {
        const phase = feature?.properties?.phase ?? 3;
        const isPhaseActive = phase <= activePhaseNum;

        if (isDark) {
          return isPhaseActive
            ? {
                color: '#64748b',
                weight: 1.5,
                opacity: 0.82,
                fillColor: '#1e293b',
                fillOpacity: 0.14,
              }
            : {
                color: '#475569',
                weight: 1,
                opacity: 0.45,
                dashArray: '4 4',
                fillOpacity: 0,
              };
        }

        return isPhaseActive
          ? {
              color: '#94a3b8',
              weight: 1.5,
              opacity: 0.85,
              fillColor: '#f1f5f9',
              fillOpacity: 0.22,
            }
          : {
              color: '#cbd5e1',
              weight: 1.1,
              opacity: 0.7,
              dashArray: '4 4',
              fillOpacity: 0,
            };
      },
    }).addTo(boundaryGroup);
  }, [activePhaseNum, isDark]);

  // Update map bullets (no radius circles) whenever phase, category, theme, or language changes
  useEffect(() => {
    const map = mapRef.current;
    const group = overlayGroupRef.current;
    if (!map || !group) return;

    group.clearLayers();

    if (showCategoryTabs) {
      const categoryMap = new Map(MAP_CATEGORY_TABS.map((t) => [t.id, t]));

      TARGET_CATEGORY_POINTS.filter(
        (pt) =>
          pt.minPhase <= activePhaseNum &&
          (activeCategory === 'semua' || pt.category === activeCategory)
      ).forEach((pt) => {
        const meta = categoryMap.get(pt.category);
        if (!meta) return;

        const bulletColor = meta.color;
        const catLabel = language === 'en' ? meta.labelEn : meta.labelId;

        const safeName = pt.companyName
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        const safeArea = pt.areaName
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        const bulletIcon = L.divIcon({
          className: 'leaflet-custom-marker',
          html: `<div style="width:18px;height:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <span style="display:block;width:11px;height:11px;border-radius:9999px;background:${bulletColor};border:2px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,0.45);"></span>
          </div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });

        const marker = L.marker([pt.lat, pt.lng], {
          icon: bulletIcon,
          riseOnHover: true,
        }).addTo(group);

        marker.bindTooltip(
          `<div style="min-width:140px;max-width:240px;white-space:normal;" class="px-3 py-2 rounded-xl text-xs font-sans shadow-lg border ${
            isDark
              ? 'bg-slate-900 text-white border-slate-700'
              : 'bg-white text-slate-900 border-slate-200'
          }">
            <div class="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider mb-0.5" style="color:${bulletColor};">
              <span style="display:inline-block;width:7px;height:7px;border-radius:9999px;background:${bulletColor};flex-shrink:0;"></span>
              <span>${catLabel}</span>
            </div>
            <div class="font-bold text-[12px] leading-snug ${
              isDark ? 'text-white' : 'text-slate-900'
            }">${safeName}</div>
            <div class="text-[10px] mt-0.5 leading-tight ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }">${safeArea}</div>
          </div>`,
          {
            direction: 'top',
            offset: [0, -10],
            opacity: 1,
            className: 'leaflet-custom-tooltip',
          }
        );

        marker.on('tooltipopen', (ev) => {
          const tooltip = ev.tooltip;
          const tooltipEl = tooltip.getElement();
          const mapEl = containerRef.current;
          if (!tooltipEl || !mapEl) return;

          const ptPoint = map.latLngToContainerPoint(marker.getLatLng());
          const mapSize = map.getSize();
          const cardHeight = tooltipEl.offsetHeight || 96;
          const cardWidth = tooltipEl.offsetWidth || 200;

          // Clamp horizontal offset so card does not clip at left/right edges
          const halfW = cardWidth / 2;
          let offsetX = 0;
          if (ptPoint.x - halfW < 10) {
            offsetX = 10 - (ptPoint.x - halfW);
          } else if (ptPoint.x + halfW > mapSize.x - 10) {
            offsetX = mapSize.x - 10 - (ptPoint.x + halfW);
          }
          offsetX = Math.round(offsetX);

          // Check top boundary + top-right floating tabs collision
          let topBarrier = 10;
          if (tabsBarRef.current) {
            const mapRect = mapEl.getBoundingClientRect();
            const tabsRect = tabsBarRef.current.getBoundingClientRect();
            const tabsLeft = tabsRect.left - mapRect.left;
            const tabsRight = tabsRect.right - mapRect.left;
            const tabsBottom = tabsRect.bottom - mapRect.top;

            const cardLeft = ptPoint.x - halfW + offsetX;
            const cardRight = ptPoint.x + halfW + offsetX;
            if (cardRight > tabsLeft - 6 && cardLeft < tabsRight + 6) {
              topBarrier = Math.max(topBarrier, tabsBottom + 8);
            }
          }

          const wouldClipTop = ptPoint.y - 10 - cardHeight < topBarrier;
          const spaceBelow = mapSize.y - (ptPoint.y + 12);
          const spaceAbove = ptPoint.y - 10 - topBarrier;

          const nextDirection: L.Direction =
            wouldClipTop && (spaceBelow >= cardHeight + 8 || spaceBelow > spaceAbove)
              ? 'bottom'
              : 'top';
          const nextOffsetY = nextDirection === 'bottom' ? 12 : -10;

          const currentOffset = L.point(tooltip.options.offset || [0, -10]);
          if (
            tooltip.options.direction !== nextDirection ||
            currentOffset.x !== offsetX ||
            currentOffset.y !== nextOffsetY
          ) {
            tooltip.options.direction = nextDirection;
            tooltip.options.offset = [offsetX, nextOffsetY];
            tooltip.update();
          }
        });
      });
    } else {
      // Compact mode (e.g. Slide 5): clean area bullets without radius circles
      TERRITORY_NODES.forEach((node) => {
        const isActive = node.minPhase <= activePhaseNum;
        const activeColor = node.minPhase === 1 ? '#2563eb' : node.minPhase === 2 ? '#0891b2' : '#4f46e5';
        const inactiveColor = isDark ? '#475569' : '#94a3b8';

        const markerIcon = L.divIcon({
          className: 'leaflet-custom-marker',
          html: `<div style="display:flex;align-items:center;gap:4px;white-space:nowrap;transform:translate(-50%,-50%);">
            <span style="width:10px;height:10px;border-radius:9999px;background:${
              isActive ? activeColor : inactiveColor
            };border:2px solid #ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.35);"></span>
            <span style="font-size:10px;font-weight:700;padding:1px 5px;border-radius:6px;background:${
              isDark ? 'rgba(15,23,42,0.88)' : 'rgba(255,255,255,0.92)'
            };color:${isActive ? (isDark ? '#f8fafc' : '#0f172a') : '#64748b'};border:1px solid ${
            isDark ? 'rgba(71,85,105,0.6)' : 'rgba(203,213,225,0.9)'
          };">${node.name}</span>
          </div>`,
          iconSize: [0, 0],
        });

        L.marker([node.lat, node.lng], { icon: markerIcon, interactive: false }).addTo(group);
      });

      if (activePhaseNum === 1) {
        TANGERANG_CLUSTERS.forEach((cluster) => {
          const clusterIcon = L.divIcon({
            className: 'leaflet-custom-marker',
            html: `<div style="transform:translate(-50%,-50%);font-size:9px;font-weight:600;padding:1px 5px;border-radius:4px;background:${
              isDark ? 'rgba(30,58,138,0.9)' : 'rgba(239,246,255,0.95)'
            };color:${isDark ? '#93c5fd' : '#1d4ed8'};border:1px solid ${
              isDark ? 'rgba(59,130,246,0.5)' : 'rgba(147,197,253,0.9)'
            };white-space:nowrap;">${cluster.name}</div>`,
            iconSize: [0, 0],
          });
          L.marker([cluster.lat, cluster.lng], { icon: clusterIcon, interactive: false }).addTo(group);
        });
      }
    }
  }, [activePhaseNum, activeCategory, showCategoryTabs, isDark, language]);

  return (
    <div
      className={`relative w-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 ${className}`}
    >
      <div ref={containerRef} className="territory-map-canvas z-0" />

      {showCategoryTabs && (
        <div
          ref={tabsBarRef}
          className="absolute top-2.5 right-2.5 z-[1000] max-w-[calc(100%-3.5rem)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="inline-flex flex-wrap justify-end items-center gap-1 p-1 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 shadow-md">
            {MAP_CATEGORY_TABS.map((tab) => {
              const isSelected = tab.id === activeCategory;
              const label = language === 'en' ? tab.labelEn : tab.labelId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 ${
                    isSelected
                      ? 'opacity-100 ring-1 ring-slate-200 dark:ring-slate-700 shadow-2xs'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  {tab.id !== 'semua' && (
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white dark:border-slate-800 shadow-2xs shrink-0"
                      style={{ backgroundColor: tab.color }}
                    />
                  )}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TerritoryMap;
