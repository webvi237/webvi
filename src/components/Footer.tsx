import React from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';
import { SERVICES } from '../data/services.ts';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, FileText, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] dark:bg-[#05080f] text-white pt-16 pb-12 border-t border-white/10 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <Logo theme="light" size="md" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#00d2ff] text-xs font-bold uppercase tracking-wider">
              <span>{COMPANY.slogan}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              WEBVI est l'entreprise de référence en sécurité électronique, télécommunications et automatismes à Douala (Beedi). Nous protégeons les personnes et sécurisons les infrastructures professionnelles au Cameroun.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#00d2ff] hover:text-[#111827] text-slate-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Facebook WEBVI"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-500 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram WEBVI"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink(`Bonjour WEBVI (${COMPANY.slogan})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="WhatsApp WEBVI"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Link to visual charter PDF */}
            <div className="pt-2">
              <a
                href="/assets/aistudio/charte_graphique_webvi__1__66fd7953.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] text-[#00d2ff] hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Télécharger le Guide d'Identité Visuelle WEBVI (PDF)</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00d2ff]">
              Nos 11 Pôles d'Expertise
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-[#00d2ff] transition-colors truncate block"
                >
                  • {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00d2ff]">
              Contact Direct
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <span>{COMPANY.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                <span>Permanence & Urgence 24/7</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all text-center block cursor-pointer"
              >
                Demander un devis en ligne
              </button>
            </div>
          </div>

        </div>

        {/* SEO Keywords & Geographic Coverage Bar */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="font-bold text-[#00d2ff] uppercase tracking-wider text-[10px]">Pôles &amp; Mots-clés Référencés :</span>
            {[
              'Webvi',
              'webvi237',
              'sécurité électronique',
              'vidéosurveillance',
              'contrôle d\'accès',
              'Starlink',
              'alarme anti intrusion',
              'alarme anti-incendie',
              'GPS tracking',
              'portail motorisé',
              'interphone vidéo',
              'barrière levante',
              'tourniquet',
              'réseau informatique'
            ].map((kw, idx) => (
              <a
                key={idx}
                href="#services"
                className="hover:text-[#00d2ff] transition-colors underline-offset-2 hover:underline"
              >
                {kw}
              </a>
            ))}
            <span className="text-slate-400">| Douala • Yaoundé • Beedi • Cameroun</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">WEBVI Technology & Security (webvi237)</strong> — <span className="text-[#00d2ff]">{COMPANY.slogan}</span>. Tous droits réservés. BEEDI - Douala, Cameroun.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Design Conforme Charte Graphique</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#00d2ff] transition-colors cursor-pointer"
              aria-label="Retour en haut de page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
