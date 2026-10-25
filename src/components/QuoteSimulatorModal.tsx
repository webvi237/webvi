import React, { useState } from 'react';
import { X, Check, Send, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services.ts';
import { COMPANY, buildWhatsAppLink, formatQuoteWhatsAppMessage, QuoteRequestData } from '../data/company.ts';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (initialServiceId) {
      const match = SERVICES.find(s => s.id === initialServiceId);
      return match ? [match.title] : [];
    }
    return ['Vidéosurveillance IP & 4K'];
  });

  const [propertyType, setPropertyType] = useState('Résidence / Villa');
  const [location, setLocation] = useState('Douala - Beedi');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const propertyTypes = [
    'Résidence / Villa de standing',
    'Entreprise / Siège & Bureaux',
    'Entrepôt / Site industriel',
    'Commerce / Supermarché',
    'Clinique / Établissement de santé',
    'Établissement scolaire / Campus'
  ];

  const locations = [
    'Douala - Beedi (Siège WEBVI)',
    'Douala - Bonapriso',
    'Douala - Akwa',
    'Douala - Bonanjo',
    'Douala - Deïdo',
    'Douala - Logbessou',
    'Douala - Bassa / Ndokoti',
    'Douala - Makepe / Kotto',
    'Yaoundé',
    'Autre ville au Cameroun'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const data: QuoteRequestData = {
      services: selectedServices,
      propertyType,
      location,
      clientName: clientName.trim() || 'Client WEBVI',
      clientPhone: clientPhone.trim() || COMPANY.phoneDisplay,
      notes: notes.trim()
    };

    const message = formatQuoteWhatsAppMessage(data);
    const link = buildWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111827] dark:bg-[#0c1220] text-white p-6 relative border-b border-white/10 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Simulateur de Devis Gratuit
                </h3>
                <p className="text-xs text-slate-300">
                  Devis clair & sans engagement en 1 clic sur WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fermer le simulateur"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Select services */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] dark:text-white mb-2">
              1. Choisissez vos services souhaités <span className="text-[#00d2ff] font-normal">(Sélection multiple)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES.map((s) => {
                const isSelected = selectedServices.includes(s.title);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => toggleService(s.title)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#00d2ff] bg-[#00d2ff]/10 dark:bg-[#00d2ff]/20 text-[#111827] dark:text-[#00d2ff] font-semibold'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 hover:bg-slate-100/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="truncate pr-2">{s.title}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#00d2ff] text-[#111827]' : 'border border-slate-300 dark:border-slate-600'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Property Type and Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-property" className="block text-xs font-semibold text-[#111827] dark:text-slate-200 mb-1.5">
                2. Type d'installation / Site
              </label>
              <select
                id="quote-property"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2.5 text-[#111827] dark:text-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quote-location" className="block text-xs font-semibold text-[#111827] dark:text-slate-200 mb-1.5">
                3. Ville / Quartier
              </label>
              <select
                id="quote-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2.5 text-[#111827] dark:text-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Client Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-name" className="block text-xs font-semibold text-[#111827] dark:text-slate-200 mb-1.5">
                Votre Nom ou Nom d'entreprise <span className="text-red-500">*</span>
              </label>
              <input
                id="quote-name"
                type="text"
                required
                placeholder="Ex: M. Jean-Paul Mbarga"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2.5 text-[#111827] dark:text-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#111827] dark:text-slate-200 mb-1.5">
                Numéro WhatsApp ou Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                id="quote-phone"
                type="tel"
                required
                placeholder="Ex: 690759196"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2.5 text-[#111827] dark:text-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-notes" className="block text-xs font-semibold text-[#111827] dark:text-slate-200 mb-1.5">
              Précisions complémentaires (Optionnel)
            </label>
            <textarea
              id="quote-notes"
              rows={2}
              placeholder="Ex : Villa R+1 nécessitant 8 caméras extérieures et contrôle d'accès au portail..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2.5 text-[#111827] dark:text-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none resize-none"
            />
          </div>

          {/* Guarantees banner */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00d2ff] shrink-0" />
            <p className="text-[11px] text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-[#111827] dark:text-white">Engagement WEBVI :</span> Visite technique sur site à Douala offerte, matériel certifié garanti 2 ans, assistance 24/7.
            </p>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm transition-all hover:scale-[1.01] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Envoyer la demande sur WhatsApp
            </button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#111827] dark:text-[#00d2ff]" />
              Appeler : {COMPANY.phoneDisplay}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
