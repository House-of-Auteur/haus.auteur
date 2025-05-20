import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex"
    >
      {/* Left Section */}
      <div className="w-1/3 bg-black relative flex items-center justify-start overflow-visible">
        <span
          className="text-white uppercase font-bold tracking-wider"
          style={{
            fontSize: '7rem',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            position: 'absolute',
            left: '3rem',
            top: '50%',
            transformOrigin: 'center',
            translate: '0 -50%',
            userSelect: 'none',
          }}
        >
          Idea
        </span>
      </div>

      {/* Center Section */}
      <div className="w-1/3 h-full bg-[#7D4DFF] relative flex items-center justify-center shadow-[0_0_100px_#320AC9] overflow-visible">
        {/* Neon glow layers, glitch overlays, camera image */}
        {/* ... your existing center content ... */}

        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Right glows */}
          <div
            className="absolute top-[-20%] right-[-10%] w-[180%] h-[160%] blur-[120px] opacity-50 rounded-full animate-pulse"
            style={{ backgroundColor: '#320AC9' }}
          />
          <div
            className="absolute top-[-10%] right-[-5%] w-[160%] h-[140%] blur-[80px] opacity-40 rounded-full animate-pulse"
            style={{ backgroundColor: '#7D4DFF' }}
          />
          <div
            className="absolute top-0 right-0 w-[140%] h-[120%] blur-[60px] opacity-30 rounded-full animate-pulse"
            style={{ backgroundColor: '#9F7AEA' }}
          />

          {/* Left glows */}
          <div
            className="absolute top-[-20%] left-[-10%] w-[10%] h-[160%] blur-[120px] opacity-50 rounded-full animate-pulse"
            style={{ backgroundColor: '#320AC9' }}
          />
          <div
            className="absolute top-[-10%] left-[-5%] w-[160%] h-[140%] blur-[80px] opacity-40 rounded-full animate-pulse"
            style={{ backgroundColor: '#7D4DFF' }}
          />
          <div
            className="absolute top-0 left-0 w-[140%] h-[120%] blur-[60px] opacity-30 rounded-full animate-pulse"
            style={{ backgroundColor: '#9F7AEA' }}
          />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIj48L2NpcmNsZT48L3N2Zz4=')] opacity-20 z-10 pointer-events-none" />

        <div className="relative z-20 w-[500px] h-[500px] animate-float">
          <img
            src="/file3.svg"
            alt="camera"
            className="w-full h-full"
            style={{
              animation: 'customFloat 5s ease-in-out infinite',
            }}
          />
        </div>
      </div>


      {/* Right Section */}
      <div className="w-1/3 bg-black relative flex items-center justify-end overflow-visible">
        {/* Glow backdrop simulating center bleed */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          
          {/* Soft radial glow blending from center */}
          <div
            className="absolute top-1/4 left-[-60%] w-[200%] h-[200%] blur-[160px] opacity-30 rounded-full"
            style={{ background: 'radial-gradient(circle at left, #7D4DFF 0%, transparent 80%)' }}
          />

          {/* Subtle inner bloom */}
          <div
            className="absolute top-1/2 left-[-40%] w-[180%] h-[180%] blur-[120px] opacity-20 rounded-full"
            style={{ backgroundColor: '#320AC9' }}
          />

          {/* Extra ambient tint */}
          <div
            className="absolute top-0 left-[-20%] w-[160%] h-[160%] blur-[100px] opacity-10 rounded-full"
            style={{ backgroundColor: '#9F7AEA' }}
          />
        </div>

        {/* Vertical Text */}
        <span
          className="text-white uppercase font-bold tracking-wider"
          style={{
            fontSize: '7rem',
            writingMode: 'vertical-rl',
            position: 'absolute',
            right: '3rem',
            top: '50%',
            transform: 'translateY(-50%)',
            userSelect: 'none',
            zIndex: 10,
          }}
        >
          Frames
        </span>
      </div>



      {/* Chapter Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center space-x-4">
          <div className="h-px w-16 bg-white/50"></div>
          <div className="text-lg text-white/80 font-space">Chapter</div>
          <div className="text-2xl font-major">01</div>
          <div className="h-px w-16 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
