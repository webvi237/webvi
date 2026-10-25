import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Devis Gratuit Express',
      desc: 'Recevez une estimation personnalisée sous 24h',
      text: 'Bonjour WEBVI, je souhaite un devis gratuit pour un système de sécurité / réseau.',
      icon: Sparkles
    },
    {
      title: 'Urgence Dépannage 24/7',
      desc: 'Assistance technique immédiate sur Douala',
      text: 'Bonjour WEBVI, j\'ai une urgence technique sur mon équipement de sécurité à Douala.',
      icon: AlertCircle
    },
    {
      title: 'Question sur nos Services',
      desc: 'Échangez en direct avec un ingénieur',
      text: 'Bonjour WEBVI, j\'ai une question concernant vos services.',
      icon: HelpCircle
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Message Menu */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#111827] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#111827] rounded-full" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Support WEBVI</h4>
                <p className="text-[10px] text-[#00d2ff]">En ligne • Réponse en 5 min</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick choices */}
          <div className="p-3 space-y-2 bg-slate-50">
            <p className="text-[11px] text-slate-500 font-medium px-1">
              Comment pouvons-nous vous aider aujourd'hui ?
            </p>
            {quickMessages.map((item, idx) => {
              const url = buildWhatsAppLink(item.text);
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#00d2ff] hover:bg-slate-50/80 transition-all text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00d2ff]/10 text-[#0099cc] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827] group-hover:text-[#0099cc] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Direct Custom Message link */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <a
              href={buildWhatsAppLink('Bonjour WEBVI, je souhaite discuter de mes besoins en sécurité.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Démarrer la conversation</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-[#111827] text-white px-3.5 py-1.5 rounded-full text-xs shadow-lg border border-[#00d2ff]/30 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
            <span className="font-medium text-slate-200">Contactez-nous sur WhatsApp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Contacter WEBVI sur WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-white" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
