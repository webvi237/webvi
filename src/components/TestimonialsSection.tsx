import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/testimonials.ts';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | '5' | 'enterprise'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeFilter === '5') return t.rating === 5;
    if (activeFilter === 'enterprise') return t.role.toLowerCase().includes('directeur') || t.role.toLowerCase().includes('gérant') || t.role.toLowerCase().includes('médecin');
    return true;
  });

  return (
    <section id="avis" className="py-20 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Aggregate Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>RECOMMANDATIONS CLIENTS VÉRIFIÉES AU CAMEROUN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] dark:text-white tracking-tight">
              La Confiance de nos Clients à Douala
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Découvrez les retours d'expérience de 7 dirigeants d'entreprises, directeurs d'institutions et particuliers qui ont choisi l'expertise WEBVI.
            </p>
          </div>

          {/* Aggregate Badge */}
          <div className="bg-[#111827] dark:bg-[#0e1626] text-white p-5 rounded-2xl border border-white/10 dark:border-slate-800 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-extrabold font-heading text-[#00d2ff]">4.9</div>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 my-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-[10px] text-slate-400">Note Globale</div>
            </div>
            <div className="h-10 w-px bg-white/10 dark:bg-slate-700" />
            <div className="space-y-0.5 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Satisfaction
              </div>
              <p className="text-[11px] text-slate-400">7 avis certifiés Google / WhatsApp</p>
              <p className="text-[10px] text-slate-300">Douala • Yaoundé • Cameroun</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#111827] text-white shadow-xs dark:bg-[#00d2ff] dark:text-[#0b0f19] dark:font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Tous les 7 avis clients
          </button>
          <button
            onClick={() => setActiveFilter('5')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === '5'
                ? 'bg-[#111827] text-white shadow-xs dark:bg-[#00d2ff] dark:text-[#0b0f19] dark:font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Notes 5/5 Étoiles
          </button>
          <button
            onClick={() => setActiveFilter('enterprise')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'enterprise'
                ? 'bg-[#111827] text-white shadow-xs dark:bg-[#00d2ff] dark:text-[#0b0f19] dark:font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Entreprises & Institutions
          </button>
        </div>

        {/* 7 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-xl hover:border-slate-300 dark:hover:border-[#00d2ff]/40 transition-all flex flex-col justify-between relative group"
            >
              {/* Quote mark icon background */}
              <div className="absolute top-4 right-4 text-slate-100 group-hover:text-[#00d2ff]/10 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Header: Miniature Photo & Details */}
                <div className="flex items-center gap-3.5 mb-4">
                  {/* Miniature photo with fallback */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00d2ff] shrink-0 bg-slate-900 shadow-xs">
                    <img
                      src={t.avatar}
                      alt={`Photo de ${t.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials avatar if network image is restricted
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#111827] text-[#00d2ff] font-bold text-xs -z-10">
                      {t.initials}
                    </div>
                  </div>

                  {/* Name and role */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#111827] dark:text-white truncate">
                        {t.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
                    </div>
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                      {t.companyOrLocation}
                    </p>
                  </div>
                </div>

                {/* Rating Stars and Service used */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(t.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : i < t.rating
                            ? 'fill-amber-400/50 text-amber-400'
                            : 'text-slate-200 dark:text-slate-700'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-[#111827] dark:text-white ml-1.5">
                      {t.rating.toFixed(1)}/5
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-[#0099cc] dark:text-[#00d2ff] bg-[#00d2ff]/10 dark:bg-[#00d2ff]/20 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                    {t.serviceUsed}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  « {t.comment} »
                </p>
              </div>

              {/* Card Footer: Verified Badge & Date */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Client Vérifié
                </span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice of Authenticity */}
        <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
          Les avis clients ci-dessus sont authentiques et issus des retours de chantiers réalisés à Douala (Akwa, Bonapriso, Bépanda, Bonanjo, Beedi, Deïdo, Logbessou).
        </div>

      </div>
    </section>
  );
};
