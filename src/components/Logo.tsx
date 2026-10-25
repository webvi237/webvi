import React, { useState } from 'react';
import { COMPANY } from '../data/company.ts';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSlogan?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  size = 'md',
  className = '',
  showSlogan = false
}) => {
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16'
  };

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={COMPANY.faviconUrl}
          alt="WEBVI Favicon & Icone"
          className={`${iconSizes[size]} object-contain drop-shadow-sm rounded-xl`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Full Logo: Uses the user's uploaded official primary logo image
  return (
    <div className={`group inline-flex flex-col select-none ${className}`}>
      <div className={`flex items-center gap-2 transition-all ${
        theme === 'dark' ? 'bg-white/95 px-2.5 py-1 rounded-xl shadow-xs' : ''
      }`}>
        {!imgError ? (
          <img
            src={COMPANY.logoUrl}
            alt="WEBVI Technology & Security"
            className={`${heights[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High quality fallback vector matching the uploaded design */
          <div className="flex items-center gap-3">
            <img
              src={COMPANY.faviconUrl}
              alt="WEBVI Icon"
              className="w-10 h-10 object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-extrabold font-heading text-xl tracking-tight text-[#111827]">
                WEB<span className="text-[#00d2ff]">VI</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#6b7280]">
                TECHNOLOGY & SECURITY
              </span>
            </div>
          </div>
        )}
      </div>

      {showSlogan && (
        <span className="text-[10px] font-bold text-[#00d2ff] tracking-wide mt-1 uppercase">
          {COMPANY.slogan}
        </span>
      )}
    </div>
  );
};
