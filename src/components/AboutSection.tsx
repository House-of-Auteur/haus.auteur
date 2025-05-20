
import React, { useRef, useEffect, useState } from 'react';

const AboutSection: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-noir-light"
    >
      {/* Background animated blobs
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#7D4DFF]/20 rounded-full blur-3xl animate-float1 left-[10%] top-[20%]" />
        <div className="absolute w-[500px] h-[500px] bg-[#320AC9]/20 rounded-full blur-[160px] animate-float2 right-[15%] top-[30%]" />
        <div className="absolute w-[600px] h-[600px] bg-[#9F7AEA]/10 rounded-full blur-[180px] animate-float3 left-1/2 bottom-[10%] transform -translate-x-1/2" />
      </div> */}


      <div className="max-w-4xl w-full space-y-16">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-major mb-6 text-center">About <span className="text-violet-light">House of Auteur</span></h2>
          <div className="h-px w-24 mx-auto bg-[#7D4DFF] mb-12"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-balance">
            House of Auteur is an independent AI-native film production studio pioneering a new era of cinema 
            through advanced generative technology. From the earliest spark of an idea to the final frame on screen, 
            we develop hyper-realistic, emotionally immersive films—powered entirely by artificial intelligence.
            Our process integrates AI seamlessly across ideation, scripting, direction, and editing, while maintaining 
            creative integrity and visual excellence.

          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-balance">
            Our mission is to push the boundaries of traditional filmmaking—empowering bold visions to materialize faster,
            smarter, and with cinematic precision. By blending narrative design with computation, we create stories that 
            feel surreal, look stunning, and are built with radical efficiency.
          </p>
          
          <p className="text-lg md:text-xl text-[#7D4DFF] leading-relaxed text-balance">
            Reimagining film through the lens of AI — where cinematic vision meets machine intelligence.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-noir/50 p-6 border border-white/5 backdrop-blur-sm shadow-lg shadow-[#7D4DFF]">
            <h3 className="font-major text-xl mb-3 text-[#7D4DFF]">Generative Storycraft</h3>
            <p className="text-gray-400">We don’t just write stories we generate them. From idea to screenplay, every narrative is algorithmically sculpted to retain soul and spontaneity.</p>
          </div>
          
          <div className="bg-noir/50 p-6 border border-white/5 backdrop-blur-sm shadow-lg shadow-[#7D4DFF]">
            <h3 className="font-major text-xl mb-3 text-[#7D4DFF]">Synthetic Cinema</h3>
            <p className="text-gray-400">Blending classical direction with generative visuals, we produce films that feel real, look surreal, and are born entirely within our production house’s closed creative system.</p>
          </div>
          
          <div className="bg-noir/50 p-6 border border-white/5 backdrop-blur-sm shadow-lg shadow-[#7D4DFF]">
            <h3 className="font-major text-xl mb-3 text-[#7D4DFF]">Emotive Design</h3>
            <p className="text-gray-400">Behind every pixel lies intent. Our films are engineered to move combining AI precision with human emotion for immersive, unforgettable storytelling.</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-dark/10 rounded-full blur-3xl"></div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4">
          <div className="h-px w-16 bg-white/50"></div>
          <div className="text-lg text-white/80 font-space">Chapter</div>
          <div className="text-2xl font-major">03</div>
          <div className="h-px w-16 bg-white/50"></div>
        </div>
      </div>
      {/* Background animated blobs
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#7D4DFF]/20 rounded-full blur-3xl animate-float1 left-[10%] top-[20%]" />
        <div className="absolute w-[500px] h-[500px] bg-[#320AC9]/20 rounded-full blur-[160px] animate-float2 right-[15%] top-[30%]" />
        <div className="absolute w-[600px] h-[600px] bg-[#9F7AEA]/10 rounded-full blur-[180px] animate-float3 left-[50%] bottom-[10%] transform -translate-x-1/2" />
      </div> */}

    </section>
    
  );
};

export default AboutSection;
