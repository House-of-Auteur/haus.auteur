
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import CameraModel from './CameraModel';

interface CameraSceneProps {
  isLoaded: boolean;
}

const CameraScene: React.FC<CameraSceneProps> = ({ isLoaded }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas 
        camera={{ position: [3.5, 2, 6], fov: 45 }}
        style={{ 
          background: 'transparent',
          cursor: hovered ? 'grab' : 'auto'
        }}
      >
        <Suspense fallback={null}>
          {/* Environment light */}
          <Environment preset="sunset" />
          
          {/* Ambient light */}
          <ambientLight intensity={0.6} />
          
          {/* Main spot light - violet tinted */}
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1.2} 
            castShadow 
            color="#8B5CF6"
          />

          {/* Fill light */}
          <pointLight position={[-10, -10, -10]} color="#6E59A5" intensity={0.7} />
          
          <CameraModel isLoaded={isLoaded} />
          
          {/* Contact shadows */}
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.8} 
            scale={12} 
            blur={2} 
            far={5} 
            color="#6E59A5"
          />
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={10}
            autoRotate={!hovered}
            autoRotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CameraScene;
