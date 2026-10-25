import React, { useState, useEffect } from 'react';
import { MessageCircle, Calculator, CheckCircle, Shield, Sparkles, Award } from 'lucide-react';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';
import { PhotoFaviconBadge } from './PhotoFaviconBadge.tsx';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = buildWhatsAppLink(
    `Bonjour WEBVI (${COMPANY.slogan}), je souhaite obtenir un devis rapide pour sécuriser mon bâtiment / entreprise à Douala.`
  );

  // Progressive Typewriter animation for the primary h1 title
  const textPart1 = "L'Innovation Technologique & la ";
  const textPart2 = "Fiabilité Absolue";
  const textPart3 = " en Sécurité Électronique.";
  const totalLength = textPart1.length + textPart2.length + textPart3.length;

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCharCount(current);
      if (current >= totalLength) {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [totalLength]);

  const slice1 = textPart1.slice(0, Math.min(charCount, textPart1.length));
  const slice2 = charCount > textPart1.length
    ? textPart2.slice(0, Math.min(charCount - textPart1.length, textPart2.length))
    : '';
  const slice3 = charCount > (textPart1.length + textPart2.length)
    ? textPart3.slice(0, charCount - (textPart1.length + textPart2.length))
    : '';
  const isTypingDone = charCount >= totalLength;

  return (
    <section className="relative overflow-hidden bg-slate-900 dark:bg-[#070b14] border-b border-slate-200/70 dark:border-slate-800 min-h-[620px] lg:min-h-[720px] flex items-center transition-colors">
      
      {/* Background: African technician in official WEBVI uniform with logo and helmet installing a camera - TOTALLY VISIBLE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_technicien_webvi_camera_1792802585711.jpg"
          alt="Technicien professionnel en tenue officielle WEBVI avec casque installant une caméra de surveillance"
          className="w-full h-full object-cover object-[70%_center] lg:object-center brightness-100 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle, soft gradient: protects text readability on left while keeping technician 100% visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 md:via-white/50 lg:via-white/20 to-transparent dark:from-[#070b14]/95 dark:via-[#070b14]/80 md:dark:via-[#070b14]/50 lg:dark:via-[#070b14]/20 pointer-events-none transition-colors" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent md:hidden dark:from-[#070b14]/90 pointer-events-none" />
        
        {/* Miniature WEBVI Favicon Badge on Hero Photo */}
        <PhotoFaviconBadge position="top-right" size="md" className="hidden sm:inline-flex" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Animated First Title & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-xl rounded-3xl p-6 sm:p-8 transition-colors">
            
            {/* Slogan Banner & Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] text-white text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
                <span>BEEDI - DOUALA • CAMEROUN</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00d2ff]/20 border border-[#00d2ff]/50 text-[#007799] dark:text-[#00d2ff] text-xs font-extrabold tracking-wide bg-white/80 dark:bg-[#111827]/80">
                <Shield className="w-3.5 h-3.5 text-[#0099cc] dark:text-[#00d2ff]" />
                <span>{COMPANY.slogan}</span>
              </div>
            </div>

            {/* Main Headline with Progressive Typewriter Writing Animation */}
            <h1 
              aria-label="L'Innovation Technologique & la Fiabilité Absolue en Sécurité Électronique."
              className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold font-heading text-[#111827] dark:text-white leading-[1.14] tracking-tight min-h-[96px] sm:min-h-[125px]"
            >
              <span>{slice1}</span>
              {slice2 && (
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#111827] dark:from-white via-[#0284c7] to-[#00d2ff]">
                    {slice2}
                  </span>
                  <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00d2ff]/25 -z-0 rounded-sm" />
                </span>
              )}
              <span>{slice3}</span>
              <span
                className={`inline-block w-1 sm:w-1.5 h-7 sm:h-11 bg-[#00d2ff] align-middle ml-1 rounded-xs transition-opacity ${
                  isTypingDone ? 'animate-cursor-blink' : 'opacity-100'
                }`}
                aria-hidden="true"
              />
            </h1>

            {/* Subtitle with soft reveal animation */}
            <div className="animate-hero-sub space-y-3">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-medium">
                Partenaire technologique des entreprises et particuliers à Douala : 
                <strong className="text-[#111827] dark:text-white"> Vidéosurveillance IP & 4K</strong>, 
                <strong className="text-[#111827] dark:text-white"> Contrôle d'accès biométrique</strong>, 
                <strong className="text-[#111827] dark:text-white"> Alarmes anti-intrusion & incendie</strong>, 
                <strong className="text-[#111827] dark:text-white"> GPS tracking flotte</strong>, 
                <strong className="text-[#111827] dark:text-white"> Motorisation de portail</strong> et 
                <strong className="text-[#111827] dark:text-white"> Déploiement Starlink</strong>.
              </p>

              {/* Slogan highlight badge */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xs py-2 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 inline-block shadow-xs">
                <span className="text-[#0099cc] dark:text-[#00d2ff]">Devise Officielle :</span>
                <span className="text-[#111827] dark:text-white">{COMPANY.slogan}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-[#111827] dark:bg-[#00d2ff] hover:bg-black dark:hover:bg-[#33ddff] text-white dark:text-[#0b0f19] font-bold text-sm shadow-xl shadow-slate-900/15 dark:shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#00d2ff] dark:text-[#0b0f19]" />
                <span>Simuler un Devis Gratuit</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp : 690 75 91 96</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-300/80 dark:border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>Devis & Visite offerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>Garantie 2 ans certifiée</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>Assistance technique 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: Left clear so the technician on the ladder installing the camera is TOTALLY VISIBLE */}
          <div className="lg:col-span-5 flex flex-col justify-end items-end pt-8 lg:pt-0 pointer-events-none">
            {/* Lightweight badge indicating the certified WEBVI technician and uniform badge without blocking him */}
            <div className="pointer-events-auto bg-[#111827]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-[#00d2ff]/40 shadow-2xl max-w-xs space-y-2 transform transition-transform hover:scale-105">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00d2ff]/20 text-[#00d2ff] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    Technicien Certifié WEBVI
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-[#00d2ff] font-mono">Tenue & Casque Officiels WEBVI</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Pose rigoureuse de caméras IP 4K, contrôle d'accès et câblage structuré à Douala et sur tout le Cameroun.
              </p>
              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Intervention Beedi-Douala</span>
                <span className="text-emerald-400 font-bold">✓ 100% Conforme</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
