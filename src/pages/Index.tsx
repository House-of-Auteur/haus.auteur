
import React, { useEffect, useState } from 'react';
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    // Update document title
    document.title = "House of Auteur | Creative Collective";
    
    // Track scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-noir text-white overflow-x-hidden">
      {/* Floating title that disappears on scroll */}
      <div 
        className={`fixed top-0 left-0 w-full z-40 text-center py-8 transition-all duration-500 ${
          scrollPosition > 100 ? 'opacity-0 -translate-y-full' : 'opacity-100'
        }`}
      >
        <h1 className="font-major text-xl tracking-widest">
          HOUSE OF AUTEUR
        </h1>
      </div>
      
      <main>
        <HeroSection />
        <TaglineSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
