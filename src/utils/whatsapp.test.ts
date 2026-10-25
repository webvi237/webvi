import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppLink, formatQuoteWhatsAppMessage, formatServiceInquiryMessage, COMPANY } from '../data/company.ts';

test('buildWhatsAppLink generates valid wa.me URL with clean phone and encoded text', () => {
  const link = buildWhatsAppLink('Bonjour WEBVI', '237690759196');
  assert.equal(link, 'https://wa.me/237690759196?text=Bonjour%20WEBVI');
});

test('buildWhatsAppLink handles spaces and special characters in message', () => {
  const link = buildWhatsAppLink('Sécurité & Vidéosurveillance 4K');
  assert.match(link, /^https:\/\/wa\.me\/237690759196\?text=/);
  assert.ok(link.includes('S%C3%A9curit%C3%A9'));
});

test('formatQuoteWhatsAppMessage includes client name, services and location', () => {
  const msg = formatQuoteWhatsAppMessage({
    clientName: 'M. Jean-Paul Mbarga',
    clientPhone: '690000000',
    location: 'Douala - Akwa',
    propertyType: 'Entreprise / Bureau',
    services: ['Vidéosurveillance', 'Contrôle d\'accès'],
    notes: 'Bâtiment R+2 avec 12 caméras'
  });

  assert.ok(msg.includes('M. Jean-Paul Mbarga'));
  assert.ok(msg.includes('Vidéosurveillance, Contrôle d\'accès'));
  assert.ok(msg.includes('Douala - Akwa'));
  assert.ok(msg.includes('Entreprise / Bureau'));
  assert.ok(msg.includes('Bâtiment R+2'));
});

test('formatServiceInquiryMessage formats service name accurately', () => {
  const msg = formatServiceInquiryMessage('Installation Starlink');
  assert.ok(msg.includes('*Installation Starlink*'));
});

test('company configuration has required contact info', () => {
  assert.equal(COMPANY.phone, '690759196');
  assert.equal(COMPANY.email, 'webvi237@gmail.com');
  assert.ok(COMPANY.location.includes('Douala'));
  assert.equal(COMPANY.colors.cyberCyan, '#00d2ff');
  assert.equal(COMPANY.colors.carbon, '#111827');
});
