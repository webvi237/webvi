/**
 * WEBVI - Technology & Security
 * Informations officielles de l'entreprise d'après la charte graphique et la demande client.
 */

export const COMPANY = {
  name: 'WEBVI',
  identifier: 'webvi237',
  tagline: 'TECHNOLOGY & SECURITY',
  slogan: 'Sécurité - Réseaux - Innovation',
  fullName: 'WEBVI Technology & Security (webvi237)',
  description: "Leader de la sécurité électronique et du réseau informatique à Douala (Beedi), Cameroun : vidéosurveillance, contrôle d'accès, Starlink, alarmes anti intrusion, alarmes anti-incendie, GPS tracking, portail motorisé, interphone vidéo, barrière levante et tourniquet.",
  location: 'BEEDI - Douala, Cameroun',
  phone: '690759196',
  phoneDisplay: '+237 690 75 91 96',
  whatsappNumber: '237690759196',
  email: 'webvi237@gmail.com',
  logoUrl: '/assets/aistudio/Logo_principal_webvi_83040858.png',
  faviconUrl: '/favicon.png',
  facebook: {
    handle: '@webvi',
    url: 'https://web.facebook.com/webvi.web/'
  },
  instagram: {
    handle: '@webvi237',
    url: 'https://www.instagram.com/webvi237/'
  },
  hours: 'Lun - Sam: 07h30 - 18h30 (Urgences 24/7)',
  colors: {
    carbon: '#111827',
    cyberCyan: '#00d2ff',
    steelGray: '#6b7280'
  }
} as const;

export interface QuoteRequestData {
  services: string[];
  propertyType: string;
  location: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}

/**
 * Génère le lien direct WhatsApp prérempli avec un message clair et professionnel.
 */
export function buildWhatsAppLink(message: string, phoneNumber = COMPANY.whatsappNumber): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

/**
 * Formate un message de demande de devis complet pour WhatsApp
 */
export function formatQuoteWhatsAppMessage(data: QuoteRequestData): string {
  const servicesList = data.services.length > 0 ? data.services.join(', ') : 'Non précisé';
  return [
    `🛡️ *DEMANDE DE DEVIS WEBVI* 🛡️`,
    `⚡ *${COMPANY.slogan}*`,
    `--------------------------------`,
    `👤 *Nom :* ${data.clientName || 'Client'}`,
    `📞 *Téléphone :* ${data.clientPhone || 'Non précisé'}`,
    `📍 *Localisation :* ${data.location || 'Douala, Cameroun'}`,
    `🏢 *Type de site :* ${data.propertyType || 'Non précisé'}`,
    `🔧 *Services souhaités :* ${servicesList}`,
    data.notes ? `📝 *Précisions :* ${data.notes}` : '',
    `--------------------------------`,
    `Bonjour WEBVI, je souhaite obtenir une étude technique et une estimation de prix pour ce projet.`
  ].filter(Boolean).join('\n');
}

/**
 * Message prérempli pour une demande d'information sur un service spécifique
 */
export function formatServiceInquiryMessage(serviceName: string): string {
  return `Bonjour WEBVI (${COMPANY.slogan}), je vous contacte depuis votre site internet concernant votre service de *${serviceName}*. Pouvez-vous me donner plus de détails et un devis ? Merci !`;
}
