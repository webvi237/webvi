import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';
import { useTheme } from '../context/ThemeContext.tsx';
import { Phone, MessageCircle, Menu, X, Shield, Clock, MapPin, Calculator, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const directWhatsAppUrl = buildWhatsAppLink(
    `Bonjour WEBVI (${COMPANY.slogan}), je vous contacte depuis votre site internet pour une demande de renseignement / devis.`
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
      {/* Top micro announcement bar with Slogan and contact info */}
      <div className="bg-[#111827] dark:bg-[#070b14] text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-white/5 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#00d2ff]" />
              <strong className="text-white">BEEDI</strong> - Douala, Cameroun
            </span>
            <span className="flex items-center gap-1.5 text-[#00d2ff] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {COMPANY.slogan}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00d2ff]" />
              Intervention rapide & Devis 24/7
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-slate-300 hover:text-[#00d2ff] transition-colors"
            >
              {COMPANY.email}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-white font-semibold flex items-center gap-1 hover:text-[#00d2ff] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00d2ff]" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand using official uploaded image */}
          <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="WEBVI Accueil">
            <Logo size="md" theme={theme} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            <a href="#services" className="hover:text-[#00d2ff] dark:hover:text-[#00d2ff] transition-colors py-1">
              Nos 11 Services
            </a>
            <a href="#starlink-special" className="hover:text-[#00d2ff] dark:hover:text-[#00d2ff] transition-colors py-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
              Starlink
            </a>
            <a href="#charte" className="hover:text-[#00d2ff] dark:hover:text-[#00d2ff] transition-colors py-1">
              Identité
            </a>
            <a href="#avis" className="hover:text-[#00d2ff] dark:hover:text-[#00d2ff] transition-colors py-1">
              Avis Clients (7)
            </a>
            <a href="#contact" className="hover:text-[#00d2ff] dark:hover:text-[#00d2ff] transition-colors py-1">
              Contact & Plan
            </a>
          </nav>

          {/* Action CTAs and Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Elegant Mode Sombre / Clair toggle button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[#00d2ff] dark:hover:border-[#00d2ff] transition-all cursor-pointer shadow-xs group"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
              <span className="text-[11px] font-bold tracking-wide">
                {theme === 'dark' ? 'Clair' : 'Sombre'}
              </span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#111827] dark:border-[#00d2ff] text-[#111827] dark:text-[#00d2ff] hover:bg-[#111827] dark:hover:bg-[#00d2ff] hover:text-white dark:hover:text-[#0b0f19] text-xs font-bold transition-all cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              Simulateur Devis
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md shadow-emerald-500/15 transition-all hover:scale-[1.02]"
              aria-label="Contacter WEBVI sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Mobile buttons: theme toggle + WhatsApp + hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Basculer thème sombre / clair"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e1626] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          {/* Mobile slogan */}
          <div className="px-2 py-1.5 rounded-lg bg-[#111827] dark:bg-[#1a2333] text-white text-xs font-bold text-center border border-white/10">
            {COMPANY.slogan}
          </div>

          {/* Mobile theme toggle row */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4 text-[#00d2ff]" /> : <Sun className="w-4 h-4 text-amber-500" />}
              Apparence visuelle :
            </span>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-lg bg-[#111827] dark:bg-[#00d2ff] text-white dark:text-[#0b0f19] text-xs font-bold"
            >
              {theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
            </button>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-800 dark:text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Nos 11 Services de Sécurité</span>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">Complet</span>
            </a>
            <a
              href="#starlink-special"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Installation Starlink Cameroun</span>
              <span className="text-xs bg-[#00d2ff]/20 text-[#0099cc] dark:text-[#00d2ff] px-2 py-0.5 rounded font-bold">Nouveau</span>
            </a>
            <a
              href="#charte"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Charte & Technologie
            </a>
            <a
              href="#avis"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Avis Clients Africains (7 Recommandations)</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">★ 4.9/5</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Contact Beedi - Douala
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-[#111827] dark:bg-[#00d2ff] text-white dark:text-[#0b0f19] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#00d2ff] dark:text-[#0b0f19]" />
              Calculer un Devis Immédiat
            </button>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Discuter sur WhatsApp (690759196)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
