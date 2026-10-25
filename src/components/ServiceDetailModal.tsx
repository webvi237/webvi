import React from 'react';
import { X, CheckCircle2, MessageCircle, Phone, Shield, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/services.ts';
import { COMPANY, buildWhatsAppLink, formatServiceInquiryMessage } from '../data/company.ts';
import { PhotoFaviconBadge } from './PhotoFaviconBadge.tsx';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  const whatsappInquiryUrl = buildWhatsAppLink(formatServiceInquiryMessage(service.title));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header & Hero Image */}
        <div className="relative h-48 sm:h-64 w-full bg-[#111827] overflow-hidden shrink-0">
          {/* Miniature Favicon Watermark on modal image */}
          <PhotoFaviconBadge position="top-left" size="sm" />

          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-[#111827]/60 hover:bg-[#111827] p-2 rounded-full backdrop-blur-sm transition-all cursor-pointer z-20"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#00d2ff] text-[#111827]">
                WEBVI Sécurité & Réseaux
              </span>
              {service.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 text-white backdrop-blur-xs">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#00d2ff] mb-2">
              Présentation de la solution
            </h4>
            <p className="leading-relaxed text-slate-800 dark:text-slate-200 text-base">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00d2ff]" />
              Avantages & Fonctionnalités clés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#00d2ff] mb-2.5">
              Spécifications techniques
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {Object.entries(service.specs).map(([label, val]) => (
                <div key={label} className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col">
                  <span className="text-[#6b7280] dark:text-slate-400 font-medium text-[11px]">{label}</span>
                  <span className="text-[#111827] dark:text-white font-semibold mt-0.5">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#00d2ff] mb-2">
              Champs d'application recommandés
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#111827]/5 dark:bg-slate-800 text-[#111827] dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Techniciens certifiés basés à Beedi-Douala</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.id);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Simuler devis
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
