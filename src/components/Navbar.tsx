
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
            
          <button 
            className="text-white hover:text-violet-light transition-colors" 
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
          <img 
              src="/HA.svg" 
              alt="House of Auteur Logo" 
              className="h-8 w-auto"
            />
            <h1 className="font-major text-xl tracking-widest">
              HOUSE OF AUTEUR
            </h1>
          </div>
        </nav>
        
        {/* Full screen menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-noir z-50 flex flex-col items-center justify-center">
            <button 
              className="absolute top-8 right-8 text-white hover:text-violet-light transition-colors" 
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              <a href="#hero" onClick={() => setMenuOpen(false)} className="font-major text-4xl hover:text-violet-light transition-all hover:translate-x-2">Home</a>
              <a href="#tagline" onClick={() => setMenuOpen(false)} className="font-major text-4xl hover:text-violet-light transition-all hover:translate-x-2">Manifesto</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="font-major text-4xl hover:text-violet-light transition-all hover:translate-x-2">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="font-major text-4xl hover:text-violet-light transition-all hover:translate-x-2">Contact</a>
            </div>
            
            <div className="absolute bottom-8 left-0 w-full flex justify-center">
              <div className="text-sm text-gray-400 font-space">© 2025 House of Auteur. All rights reserved.</div>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
