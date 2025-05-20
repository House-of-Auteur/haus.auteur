
import React, { useRef, useEffect, useState } from 'react';

const TaglineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="tagline" 
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-noir noise-bg"
    >
      <div className="absolute inset-0 bg-violet-500/5 mix-blend-overlay"></div>
      
      <h2 
        data-text="Stories aren't told here. They're lived."
        className={`glitch-text max-w-4xl px-6 text-center text-4xl md:text-6xl lg:text-5xl font-major leading-tight transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="block">From Concept to Screen</span>
        <span className="block text-[#7D4DFF] text-glow">Unreal Made Real</span>
      </h2>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-dark/10 rounded-full blur-3xl"></div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4">
          <div className="h-px w-16 bg-white/50"></div>
          <div className="text-lg text-white/80 font-space">Chapter</div>
          <div className="text-2xl font-major">02</div>
          <div className="h-px w-16 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
