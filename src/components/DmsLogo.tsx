import React from 'react';

interface DmsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showBadge?: boolean;
  subtitle?: string;
  forceTheme?: 'light' | 'dark';
}

export const DmsLogo: React.FC<DmsLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showBadge = false,
  subtitle,
  forceTheme,
}) => {
  const logoHeights = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-9 sm:h-10 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-28 w-auto',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {forceTheme === 'light' ? (
        <img
          src="/logo-hitam.webp"
          alt="Nova Media Lab"
          className={`${logoHeights[size]} shrink-0 object-contain`}
        />
      ) : forceTheme === 'dark' ? (
        <img
          src="/logo-putih.webp"
          alt="Nova Media Lab"
          className={`${logoHeights[size]} shrink-0 object-contain`}
        />
      ) : (
        <>
          <img
            src="/logo-hitam.webp"
            alt="Nova Media Lab"
            className={`${logoHeights[size]} shrink-0 object-contain block dark:hidden`}
          />
          <img
            src="/logo-putih.webp"
            alt="Nova Media Lab"
            className={`${logoHeights[size]} shrink-0 object-contain hidden dark:block`}
          />
        </>
      )}

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-slate-900 dark:text-white ${textSizes[size]}`}>
              NOVA MEDIA LAB
            </span>
            {showBadge && (
              <span className="px-1.5 py-0.2 bg-blue-500/10 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400 text-[9px] font-extrabold rounded-md uppercase tracking-wider">
                NML
              </span>
            )}
          </div>
          <span className={`text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase ${subTextSizes[size]}`}>
            {subtitle ?? 'Sales & Market Expansion'}
          </span>
        </div>
      )}
    </div>
  );
};

export default DmsLogo;
