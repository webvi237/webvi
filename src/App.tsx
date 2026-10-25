import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { BrandCharterBanner } from './components/BrandCharterBanner.tsx';
import { StarlinkSpecial } from './components/StarlinkSpecial.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { ServiceItem } from './data/services.ts';
import { ThemeProvider } from './context/ThemeContext.tsx';

function MainApp() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>();
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const handleOpenQuote = (serviceId?: string) => {
    setQuoteInitialService(serviceId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialService(undefined);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedServiceForModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#070b14] text-[#111827] dark:text-slate-100 selection:bg-[#00d2ff]/20 selection:text-[#111827] transition-colors duration-200">
      {/* Top Navbar with Dark/Light toggle */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Première section du site : Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 2. Directement après le Hero : La section des différents services */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* 3. Charte Graphique & Piliers Stratégiques */}
        <BrandCharterBanner />

        {/* 4. Focus Starlink Haut Débit */}
        <StarlinkSpecial onOpenQuote={handleOpenQuote} />

        {/* 5. Avis Clients Africains (7 témoignages vérifiés) */}
        <TestimonialsSection />

        {/* 6. FAQ Sécurité & Réseaux */}
        <FAQSection />

        {/* 7. Contact & Localisation Beedi-Douala */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Interactive Modals */}
      <QuoteSimulatorModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialServiceId={quoteInitialService}
      />

      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={handleCloseServiceModal}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating 24/7 WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
