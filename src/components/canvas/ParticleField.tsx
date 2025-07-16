import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../hooks/useTheme';

// Generate random sphere points
const generateSpherePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

    points[i3] = r * Math.sin(phi) * Math.cos(theta);
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i3 + 2] = r * Math.cos(phi);
  }
  return points;
};

interface ParticleFieldProps {
  count?: number;
  size?: number;
  radius?: number;
  color?: string;
  speed?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 1000,
  size = 0.02,
  radius = 2,
  color = '#6366F1',
  speed = 0.1
}) => {
  const { isDark } = useTheme();
  const pointsRef = useRef<THREE.Points>(null);
  const spherePoints = React.useMemo(() => generateSpherePoints(count, radius), [count, radius]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.15;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={spherePoints} stride={3}>
      <PointMaterial
        transparent
        color={isDark ? color : color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
};

export default ParticleField;