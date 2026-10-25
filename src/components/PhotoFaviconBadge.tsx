import React from 'react';
import { COMPANY } from '../data/company.ts';

interface PhotoFaviconBadgeProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md';
  className?: string;
  showText?: boolean;
}

export const PhotoFaviconBadge: React.FC<PhotoFaviconBadgeProps> = ({
  position = 'top-right',
  size = 'sm',
  className = '',
  showText = true
}) => {
  const positionClasses = {
    'top-right': 'top-2.5 right-2.5',
    'top-left': 'top-2.5 left-2.5',
    'bottom-right': 'bottom-2.5 right-2.5',
    'bottom-left': 'bottom-2.5 left-2.5'
  };

  const imgSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5'
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} z-10 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#111827]/85 backdrop-blur-md border border-[#00d2ff]/40 shadow-md text-white select-none pointer-events-none ${className}`}
      title="WEBVI - Technologie & Sécurité"
    >
      <img
        src={COMPANY.faviconUrl}
        alt="Favicon WEBVI"
        className={`${imgSizes[size]} object-contain rounded-xs drop-shadow`}
        referrerPolicy="no-referrer"
      />
      {showText && (
        <span className="text-[10px] font-bold font-mono tracking-wider text-slate-100 uppercase">
          WEB<span className="text-[#00d2ff]">VI</span>
        </span>
      )}
    </div>
  );
};
