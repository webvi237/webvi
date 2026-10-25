import React from 'react';
import { Shield, Cpu, Lock, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { COMPANY } from '../data/company.ts';

export const BrandCharterBanner: React.FC = () => {
  return (
    <section id="charte" className="py-16 bg-slate-50 dark:bg-[#070b14] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/5 dark:bg-white/10 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-[#111827] dark:text-slate-200 mb-3">
            <Shield className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>ALIGNEMENT STRATÉGIQUE & CHARTE OFFICIELLE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#111827] dark:text-white tracking-tight">
            Deux Piliers Fondamentaux : Innovation & Fiabilité
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            L'identité de <strong className="text-[#111827] dark:text-[#00d2ff]">WEBVI</strong> a été conçue pour inspirer une confiance immédiate aux entreprises (B2B), institutions et propriétaires exigeants au Cameroun.
          </p>
        </div>

        {/* 2 Core Pillars & Visual Identity Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Innovation Technologique */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#0099cc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#111827] dark:text-white mb-2">
              1. Innovation Technologique
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Intelligence Artificielle appliquée à la reconnaissance d'images, connectivité satellite Starlink ultra-rapide, algorithmes de détection anti-usurpation et pilotage mobile temps réel.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Caméras IA et reconnaissance faciale</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Gestion domotique et télécommandes IoT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Internet spatial Starlink à haut débit</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Fiabilité Absolue */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#111827] dark:bg-slate-800 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Lock className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#111827] dark:text-white mb-2">
              2. Fiabilité Absolue
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Sécurité électronique sans faille. Équipements certifiés conformes aux normes internationales, boîtiers blindés anti-vandalisme et circuits secourus sur batterie contre les coupures de courant.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Matériel garanti 2 ans certifié</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Alimentation secourue en cas de panne</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>SAV et techniciens basés à Douala</span>
              </li>
            </ul>
          </div>

          {/* Brand Visual Identity & Color Specs from Charter */}
          <div className="bg-[#111827] text-white rounded-2xl p-6 border border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Logo variant="icon" size="sm" />
                <span className="text-[10px] font-mono tracking-widest text-[#00d2ff] uppercase border border-[#00d2ff]/40 px-2 py-0.5 rounded">
                  PALETTE OFFICIELLE
                </span>
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Architecture Visuelle
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Fusion d'un bouclier protecteur rigoureux et d'un noyau matriciel dynamique en son centre.
              </p>

              {/* Color swatches from PDF */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#111827] border border-white/40" />
                    <span className="font-semibold text-slate-200">Noir Carbone</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">HEX #111827</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#00d2ff]" />
                    <span className="font-semibold text-[#00d2ff]">Bleu Cyan Cyber</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">HEX #00d2ff</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#6b7280]" />
                    <span className="font-semibold text-slate-300">Gris Acier</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">HEX #6b7280</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span>Siège Social : Beedi - Douala</span>
              <span className="text-[#00d2ff] font-semibold">{COMPANY.phoneDisplay}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
