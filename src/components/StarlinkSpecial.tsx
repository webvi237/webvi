import React from 'react';
import { Wifi, Zap, Shield, Check, ArrowRight, MessageCircle, Signal } from 'lucide-react';
import { buildWhatsAppLink } from '../data/company.ts';
import { PhotoFaviconBadge } from './PhotoFaviconBadge.tsx';

interface StarlinkSpecialProps {
  onOpenQuote: (serviceId: string) => void;
}

export const StarlinkSpecial: React.FC<StarlinkSpecialProps> = ({ onOpenQuote }) => {
  const starlinkWhatsAppUrl = buildWhatsAppLink(
    'Bonjour WEBVI, je souhaite installer une antenne Starlink à mon domicile / entreprise au Cameroun. Quels sont vos tarifs d\'installation et délais ?'
  );

  return (
    <section id="starlink-special" className="py-20 bg-slate-50 dark:bg-[#070b14] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      {/* Decorative cyber backdrop glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#111827] dark:bg-[#0c1220] rounded-3xl overflow-hidden shadow-2xl border border-[#00d2ff]/20 dark:border-[#00d2ff]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d2ff]/15 border border-[#00d2ff]/30 text-[#00d2ff] text-xs font-bold uppercase tracking-wider">
                <Signal className="w-3.5 h-3.5" />
                <span>INNOVATION SATELLITE HAUT DÉBIT • CAMEROUN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                Installation Professionnelle Starlink à Douala & Partout au Cameroun
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ne subissez plus les lenteurs, pannes de fibre ou coupures d'internet. WEBVI installe votre kit satellite Starlink dans les règles de l'art pour délivrer un débit ultra-rapide de 150 à 250 Mbps, même dans les zones isolées.
              </p>

              {/* Technical checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#00d2ff]" />
                  </div>
                  <span className="text-xs text-slate-200">Fixation toiture renforcée anti-intempéries</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#00d2ff]" />
                  </div>
                  <span className="text-xs text-slate-200">Passage de câble étanche avec parafoudre</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#00d2ff]" />
                  </div>
                  <span className="text-xs text-slate-200">Intégration routeur d'entreprise & Wi-Fi 6</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#00d2ff]" />
                  </div>
                  <span className="text-xs text-slate-200">Secours automatique Dual-WAN (Failover)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={starlinkWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Commander l'installation sur WhatsApp
                </a>

                <button
                  onClick={() => onOpenQuote('starlink')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  Simuler devis Starlink
                  <ArrowRight className="w-3.5 h-3.5 text-[#00d2ff]" />
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 p-6 lg:p-8 flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#00d2ff]/30 shadow-xl group">
                <PhotoFaviconBadge position="top-right" size="sm" />
                <img
                  src="/assets/images/technicien_starlink_logo_webvi_1792802568925.jpg"
                  alt="Technicien professionnel en tenue officielle WEBVI installant un kit satellite Starlink sur toiture"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#111827]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00d2ff]/20 text-[#00d2ff] flex items-center justify-center">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Débit garanti Starlink</div>
                      <div className="text-[10px] text-slate-300">Latence ultra-faible 30ms</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00d2ff] bg-[#00d2ff]/10 px-2 py-1 rounded">
                    ~220 Mbps
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
