import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Clock, Send, ShieldCheck, Check } from 'lucide-react';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Vidéosurveillance');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `Bonjour WEBVI,\nJe m'appelle *${formName}* (${formPhone}).\nService concerné : *${formService}*.\nMessage : ${formMessage}`;
    const url = buildWhatsAppLink(fullMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#070b14] relative transition-colors border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] dark:bg-[#00d2ff] text-white dark:text-[#0b0f19] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#00d2ff] dark:text-[#0b0f19]" />
            <span>BEEDI - DOUALA • CAMEROUN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111827] dark:text-white tracking-tight">
            Contactez l'Équipe WEBVI
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Notre bureau technique est basé à Beedi (Douala). Nous intervenons sur toute la région du Littoral et sur l'ensemble du territoire camerounais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-[#111827] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center shrink-0 group-hover:bg-[#00d2ff] group-hover:text-[#111827] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Téléphone & WhatsApp</div>
                    <div className="text-base font-bold text-white mt-0.5">{COMPANY.phoneDisplay}</div>
                    <div className="text-[11px] text-[#00d2ff]">Appel direct ou message 24/7</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center shrink-0 group-hover:bg-[#00d2ff] group-hover:text-[#111827] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Courriel Professionnel</div>
                    <div className="text-sm font-bold text-white mt-0.5 break-all">{COMPANY.email}</div>
                    <div className="text-[11px] text-slate-400">Réponse sous 2 à 4 heures</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Siège & Bureau Technique</div>
                    <div className="text-sm font-bold text-white mt-0.5">{COMPANY.location}</div>
                    <div className="text-[11px] text-slate-400">Interventions rapides partout à Douala</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Horaires d'Ouverture</div>
                    <div className="text-sm font-bold text-white mt-0.5">{COMPANY.hours}</div>
                    <div className="text-[11px] text-emerald-400">Permanence technique continue</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-semibold text-slate-400 mb-3">
                  Suivez WEBVI sur les réseaux officiels :
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={COMPANY.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-white text-xs font-semibold transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span className="truncate">Facebook {COMPANY.facebook.handle}</span>
                  </a>

                  <a
                    href={COMPANY.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-white text-xs font-semibold transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span className="truncate">Instagram {COMPANY.instagram.handle}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Direct Button */}
            <a
              href={buildWhatsAppLink('Bonjour WEBVI, je souhaite échanger directement avec un technicien.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Ouvrir une discussion WhatsApp instantanée</span>
            </a>

          </div>

          {/* Right Column: Contact Message Form & Coverage Areas */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 transition-colors">
            <div>
              <h3 className="text-xl font-bold font-heading text-[#111827] dark:text-white">
                Envoyez-nous un Message Direct
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Remplissez ce formulaire pour être mis en relation immédiate avec un conseiller technique.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">Demande transmise avec succès !</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                  Votre message a été dirigé vers WhatsApp. Si la fenêtre ne s'est pas ouverte, vous pouvez nous contacter directement au <strong>{COMPANY.phoneDisplay}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-800 dark:text-emerald-300 underline cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[#111827] dark:text-slate-200 mb-1">
                      Votre Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="M. / Mme Nom"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-[#111827] dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-[#111827] dark:text-slate-200 mb-1">
                      Numéro WhatsApp / Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="Ex : 690759196"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-[#111827] dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold text-[#111827] dark:text-slate-200 mb-1">
                    Service concerné
                  </label>
                  <select
                    id="contact-service"
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-3 text-[#111827] dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none"
                  >
                    <option value="Vidéosurveillance IP & 4K">Vidéosurveillance IP & 4K</option>
                    <option value="Contrôle d'accès biométrique">Contrôle d'accès biométrique</option>
                    <option value="Tourniquets & Couloirs">Tourniquets & Couloirs rapides</option>
                    <option value="Barrières levantes">Barrières levantes automatiques</option>
                    <option value="Alarme anti-intrusion">Alarme anti-intrusion</option>
                    <option value="Alarme anti-incendie">Alarme anti-incendie SSI</option>
                    <option value="Réseau d'entreprise">Réseau d'entreprise & Wi-Fi</option>
                    <option value="GPS Tracking Flotte">GPS Tracking & Géolocalisation</option>
                    <option value="Motorisation de portail">Motorisation de portail</option>
                    <option value="Interphone vidéo">Interphone vidéo (visiophone)</option>
                    <option value="Installation Starlink">Installation Starlink Cameroun</option>
                    <option value="Autre demande">Autre projet sur-mesure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#111827] mb-1">
                    Votre Message ou Description du besoin
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Précisez votre adresse, le nombre de caméras, la superficie ou vos contraintes techniques..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full text-xs rounded-xl border border-slate-200 bg-slate-50 p-3 text-[#111827] focus:bg-white focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#111827] hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#00d2ff]" />
                  Transmettre directement sur WhatsApp (690759196)
                </button>
              </form>
            )}

            {/* Zones d'intervention Douala & Cameroun */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                Zones d'Intervention Rapide :
              </h4>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-[#111827]">BEEDI (Siège)</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Akwa</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Bonapriso</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Bonanjo</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Deïdo</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Logbessou</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Bassa</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Makepe</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100">Kotto</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-[#0099cc]">Yaoundé & Tout Cameroun</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
