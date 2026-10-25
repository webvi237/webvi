import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/company.ts';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Comment obtenir un devis pour mes installations de sécurité ?',
      a: 'Le devis est 100% gratuit et sans engagement. Vous pouvez utiliser notre simulateur en ligne ou nous contacter directement sur WhatsApp au 690759196. Un technicien peut également se déplacer gratuitement à Douala pour auditer vos locaux et évaluer précisément vos besoins.'
    },
    {
      q: 'Comment fonctionne l\'installation de l\'internet Starlink avec WEBVI ?',
      a: 'Nous prenons en charge la fixation sécurisée de l\'antenne sur toiture ou mât rigide, le passage étanche des câbles, la protection parafoudre ainsi que la connexion à vos routeurs et bornes Wi-Fi. Nous pouvons également configurer un basculement automatique (Dual-WAN) en cas de panne de votre connexion internet habituelle.'
    },
    {
      q: 'Puis-je regarder mes caméras de surveillance à distance sur mon smartphone ?',
      a: 'Absolument. Toutes nos installations de vidéosurveillance IP sont connectées à votre smartphone (iPhone et Android) ainsi qu\'à vos ordinateurs. Vous recevez des alertes instantanées avec photo ou vidéo dès qu\'un intrus est détecté par l\'intelligence artificielle.'
    },
    {
      q: 'Quelle est la durée de garantie sur vos équipements installés ?',
      a: 'Tous les équipements fournis et posés par WEBVI bénéficient d\'une garantie constructeur de 1 à 2 ans selon le matériel. En outre, notre service après-vente basé à Beedi (Douala) assure la maintenance préventive et le dépannage rapide.'
    },
    {
      q: 'Installez-vous vos solutions en dehors de la ville de Douala ?',
      a: 'Oui ! Si notre siège technique est implanté à Beedi - Douala, nos équipes interviennent régulièrement à Yaoundé, Bafoussam, Kribi, Limbe et sur des chantiers partout au Cameroun et en Afrique centrale.'
    },
    {
      q: 'Que se passe-t-il en cas de coupure d\'électricité (délestage Eneo) ?',
      a: 'Nous intégrons des alimentations secourues par batteries haute capacité et des onduleurs parafoudres professionnels sur l\'ensemble de nos systèmes (alarmes, caméras, contrôle d\'accès, Starlink). Vos locaux restent protégés 24h/24 même sans courant.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/5 dark:bg-white/10 text-[#111827] dark:text-slate-200 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>FOIRE AUX QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827] dark:text-white">
            Questions Fréquentes sur nos Services
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            Tout ce que vous devez savoir pour votre projet de sécurisation ou de réseau.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors bg-slate-50/50 dark:bg-[#111827]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#111827] dark:text-white hover:text-[#0099cc] dark:hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00d2ff]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center bg-slate-50 dark:bg-[#111827] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600 dark:text-slate-300">
            Vous avez une autre question spécifique à votre bâtiment ?
          </span>
          <a
            href={buildWhatsAppLink('Bonjour WEBVI, j\'ai une question qui ne figure pas dans votre FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
            Posez-la nous directement sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
