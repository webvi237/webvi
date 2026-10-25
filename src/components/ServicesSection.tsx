import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, MessageCircle, Shield, Check, Info, SlidersHorizontal } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services.ts';
import { buildWhatsAppLink, formatServiceInquiryMessage } from '../data/company.ts';
import { PhotoFaviconBadge } from './PhotoFaviconBadge.tsx';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tous nos 11 Services' },
    { id: 'surveillance', label: 'Vidéosurveillance & Alarmes' },
    { id: 'access', label: 'Contrôle d\'accès & Portails' },
    { id: 'network', label: 'Réseaux & Starlink' },
    { id: 'automation', label: 'GPS Tracking & Domotique' }
  ];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#0b0f19] transition-colors border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d2ff]/10 dark:bg-[#00d2ff]/20 text-[#0099cc] dark:text-[#00d2ff] text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>CATALOGUE COMPLET DES PRESTATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] dark:text-white tracking-tight">
              Nos Solutions de Sécurité Électronique & Réseaux
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Des équipements certifiés, posés par des ingénieurs et techniciens expérimentés à Douala et dans tout le Cameroun.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Rechercher un service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-[#111827] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 absolute right-3 top-3 font-semibold"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-white shadow-md dark:bg-[#00d2ff] dark:text-[#0b0f19] dark:font-bold'
                  : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              {cat.id === 'all' && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  activeCategory === 'all' 
                    ? 'bg-[#00d2ff] text-[#111827] dark:bg-[#0b0f19] dark:text-[#00d2ff]' 
                    : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                }`}>
                  11
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">
              Aucun service ne correspond à votre recherche « {searchQuery} ».
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-[#111827] dark:bg-[#00d2ff] text-white dark:text-[#0b0f19] text-xs font-semibold cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const whatsappLink = buildWhatsAppLink(formatServiceInquiryMessage(service.title));

              return (
                <div
                  key={service.id}
                  className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 dark:hover:border-[#00d2ff]/40 transition-all duration-300 flex flex-col group"
                >
                  {/* Service Image Header */}
                  <div className="relative h-48 w-full bg-[#111827] overflow-hidden">
                    {/* Miniature WEBVI Favicon on all photos */}
                    <PhotoFaviconBadge position="top-right" size="sm" />

                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00d2ff] text-[#111827] shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-bold font-heading text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#00d2ff] shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs font-bold text-[#111827] dark:text-[#00d2ff] hover:text-[#0099cc] dark:hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        Fiche technique
                        <ArrowRight className="w-3 h-3 text-[#00d2ff]" />
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs font-semibold transition-all"
                        aria-label={`Demander un devis pour ${service.title} sur WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Devis WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Global CTA under services */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111827] via-[#111827] to-[#0b0f19] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Vous avez un projet sur-mesure ou combiné ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nos ingénieurs sécurité se déplacent directement dans vos locaux à Douala pour réaliser un audit technique gratuit et vous proposer une solution adaptée.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote('videosurveillance')}
              className="px-5 py-3 rounded-xl bg-[#00d2ff] hover:bg-[#00b8e6] text-[#111827] text-xs font-bold text-center transition-all shadow-md shadow-[#00d2ff]/20"
            >
              Simuler mon devis multi-services
            </button>
            <a
              href={buildWhatsAppLink('Bonjour WEBVI, je souhaite demander une visite technique gratuite sur mon site à Douala.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Prendre RDV sur WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
