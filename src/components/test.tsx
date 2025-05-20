
import React, { useEffect, useState } from 'react';
import CameraScene from './CameraScene';
// import MySvg from '/file.svg';
import { ReactComponent as MySvg } from './file.svg';



const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Left section - black
      <div className="absolute left-0 top-0 w-1/2 h-full bg-noir flex items-center">
        <div className={`absolute left-16 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="vertical-text text-6xl md:text-8xl font-major font-bold tracking-wide">People</h2>
        </div>
      </div>
      
      {/* Right section - black */}
      {/* <div className="absolute right-0 top-0 w-1/2 h-full bg-noir flex items-center">
        <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
          <h2 className="vertical-text text-6xl md:text-8xl font-major font-bold tracking-wide">Work</h2>
        </div>
      </div> */}
      
      {/* Center violet section with 3D camera */}
{/* <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[20%] md:w-[15%] flex items-center justify-center pointer-events-none z-20"> */}
  {/* Camera container with enhanced glow + gradient background */}
  {/* <div className="relative w-[200%] h-[500px] md:h-[600px] bg-gradient-to-br from-cyber-purple via-cyber-purple-glow to-black overflow-hidden rounded-full"> */}
    
    {/* Glowing layers for depth */}
    {/* <div
      className="absolute inset-0 blur-3xl rounded-full animate-pulse"
      style={{
        backgroundColor: 'rgba(147, 51, 234, 0.3)', // cyber-purple
        width: '130%',
        height: '130%',
        left: '-15%',
        top: '-15%',
      }}
    />
    <div
      className="absolute inset-0 blur-2xl rounded-full animate-pulse"
      style={{
        backgroundColor: 'rgba(168, 85, 247, 0.3)', // cyber-purple-glow
        animationDelay: '0.5s',
        width: '120%',
        height: '120%',
        left: '-10%',
        top: '-10%',
      }}
    />
    <div
      className="absolute inset-0 blur-xl rounded-full animate-pulse"
      style={{
        backgroundColor: 'rgba(139, 92, 246, 0.2)', // soft violet
        animationDelay: '1s',
      }}
    /> */}

    {/* Glitch texture overlay */}
    {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIj48L2NpcmNsZT48L3N2Zz4=')] opacity-20" /> */}

    {/* 3D Camera */}
    {/* <div className="relative z-10 w-full h-full">
      <CameraScene isLoaded={isLoaded} />
    </div>
  </div>
</div> */}



    <div className="relative w-full h-screen flex ">

            {/* Left Section */}

            <div className="w-1/3 bg-black relative">
              <span className="border border-white absolute top-1/3 -translate-y-1/2 left-20 rotate-90 origin-left text-white uppercase font-bold text-[7rem] tracking-wider">
                Idea
              </span>
            </div>


            {/* Center Section */}  
      <div className="relative w-1/3 h-full bg-[#7D4DFF] overflow-visible flex items-center justify-center shadow-[0_0_100px_#320AC9]">

        {/* Neon glow layers - Right side */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
        </div>

        {/* Neon glow layers - Left side */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-[-20%] left-[-10%] w-[180%] h-[160%] blur-[120px] opacity-50 rounded-full animate-pulse"
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

        {/* Glitch Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIj48L2NpcmNsZT48L3N2Zz4=')] opacity-20 z-10 pointer-events-none" />

        {/* Camera */}
        <div className="relative z-20 w-[500px] h-[500px] animate-float">
          <img
            src="/file3.svg"
            alt="camera"
            className="w-full h-full"
            style={{
              animation: 'customFloat 5s ease-in-out infinite'
            }}
          />
        </div>
      </div>




      {/* Right Section */}
<div className="w-1/3 bg-black relative overflow-visible px-8">
  <span
    style={{ top: '22%' }}
    className="border border-white absolute -translate-y-1/2 right-8 -rotate-90 origin-right text-white uppercase font-bold text-[7rem] tracking-wider"
  >
    Frames
  </span>

  {/* Your glow layers here (positioned absolutely inside this container) */}
</div>



    </div>


      
    {/* Chapter indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
