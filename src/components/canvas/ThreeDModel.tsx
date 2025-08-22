import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface ThreeDModelProps {
  className?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ className = '' }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`h-[500px] w-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Canvas className="cursor-grab active:cursor-grabbing">
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1.5} 
          rotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color={isDark ? "#4338CA" : "#6366F1"}
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.4}
              metalness={0.8}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ThreeDModel;