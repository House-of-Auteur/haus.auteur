import React, { useRef, useEffect, useState } from 'react';

const ContactSection: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden bg-noir"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-between gap-12 transition-all duration-1000 delay-300 
        px-4 md:px-12"
      >
        {/* Left - Contact Info Boxes */}
        <div className={`flex flex-col space-y-6 w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-major text-left mb-4">
            Get in Touch
          </h2>

          <div className="space-y-4">
            <div className="bg-noir-accent border border-white/10 px-6 py-4 text-white text-lg font-space hover:bg-[#7D4DFF]/10 transition">
              <p className="text-sm text-white/50">Email</p>
              <a href="mailto:haus.auteur@gmail.com" className="hover:underline">haus.auteur@gmail.com</a>
            </div>

            <div className="bg-noir-accent border border-white/10 px-6 py-4 text-white text-lg font-space hover:bg-[#7D4DFF]/10 transition">
              <p className="text-sm text-white/50">LinkedIn</p>
              <a href="https://www.linkedin.com/company/house-of-auteur/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/
              </a>
            </div>

            <div className="bg-noir-accent border border-white/10 px-6 py-4 text-white text-lg font-space hover:bg-[#7D4DFF]/10 transition">
              <p className="text-sm text-white/50">Instagram</p>
              <a href="https://www.instagram.com/haus.auteur/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @haus.auteur
              </a>
            </div>
          </div>
        </div>
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c4dff5f] rounded-full blur-3xl"></div>

        {/* Right - Logo */}
        <div className={`w-full md:w-1/1 flex justify-center md:justify-end items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-65 h-70 p-6 flex items-center justify-center">
            {/* Swap this with your actual logo */}
            <img src="/HA.svg" alt="House of Auteur Logo" className="w-[500px] h-auto object-contain" />
          </div>
        </div>
      </div>

      

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-gray-500 font-space text-sm">
        <p>© 2025 House of Auteur. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ContactSection;
