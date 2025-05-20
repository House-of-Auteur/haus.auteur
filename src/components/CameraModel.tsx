
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface CameraModelProps {
  isLoaded: boolean;
}

const CameraModel: React.FC<CameraModelProps> = ({ isLoaded }) => {
  const cameraRef = useRef<Group>(null);
  
  // Animate camera on load and when user interacts
  useFrame((state, delta) => {
    if (cameraRef.current) {
      // Gentle floating animation
      cameraRef.current.rotation.y += delta * 0.2;
      cameraRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Scale up when loaded
      if (isLoaded && cameraRef.current.scale.x < 2.5) {
        cameraRef.current.scale.x += delta;
        cameraRef.current.scale.y += delta;
        cameraRef.current.scale.z += delta;
      }
    }
  });

  return (
    <>
      {/* Camera model group */}
      <group 
        ref={cameraRef} 
        position={[0, 0, 0]} 
        scale={isLoaded ? [0.001, 0.001, 0.001] : [0, 0, 0]} 
        rotation={[0, Math.PI / 4, 0]}
      >
        {/* Camera body */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.9, 2]} />
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Camera lens */}
        <mesh castShadow position={[0, 0, -1.2]}>
          <cylinderGeometry args={[0.6, 0.8, 1.2, 32]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Lens front glass */}
        <mesh position={[0, 0, -1.8]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
          <meshPhysicalMaterial 
            color="#000" 
            metalness={0.1} 
            roughness={0.1} 
            clearcoat={1} 
            clearcoatRoughness={0} 
            reflectivity={1}
          />
        </mesh>
        
        {/* Camera viewfinder */}
        <mesh castShadow position={[0, 0.7, 0.5]}>
          <boxGeometry args={[0.7, 0.5, 0.6]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Film reel (left) */}
        <mesh castShadow position={[-0.8, 0.5, 0.3]}>
          <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#444" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Film reel (right) */}
        <mesh castShadow position={[0.8, 0.5, 0.3]}>
          <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#444" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Top handle */}
        <mesh castShadow position={[0, 0.8, 0]}>
          <boxGeometry args={[0.3, 0.2, 1.2]} />
          <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Side grip */}
        <mesh castShadow position={[0.8, 0, 0.3]}>
          <boxGeometry args={[0.2, 0.6, 1]} />
          <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Glowing buttons */}
        <mesh position={[0.7, 0, -0.4]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={3} />
        </mesh>
        
        <mesh position={[0.7, 0.2, -0.4]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#6E59A5" emissive="#6E59A5" emissiveIntensity={2} />
        </mesh>
      </group>
    </>
  );
};

export default CameraModel;
