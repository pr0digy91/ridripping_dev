// components/RotatingLightAnimation.tsx

import { useEffect, useState } from 'react';

interface BeamState {
  x: number;
  y: number;
}

interface RotatingLightAnimationProps {
  className?: string;
  brightness?: number; // Controls the opacity/brightness (0-100)
  frequency?: number; // Controls movement speed (0.1 = slow, 1 = normal, 2 = fast)
  spread?: number; // Controls light beam spread at the end (10-100, higher = wider cone)
  length?: number; // Controls beam length (50-150, percentage of screen)
  beamCount?: number; // Number of beams (1-3)
}

export const RotatingLightAnimation: React.FC<RotatingLightAnimationProps> = ({
  className = '',
  brightness = 10,
  frequency = 1,
  spread = 30,
  length = 100,
  beamCount = 1,
}) => {
  const [beamEnds, setBeamEnds] = useState<BeamState[]>([{ x: 50, y: 50 }]);

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      // Move the beam ends in smooth, random patterns
      const t = frame * 0.005 * frequency;
      const moveRange = length / 100;
      
      const newBeamEnds: BeamState[] = [];
      
      for (let i = 0; i < beamCount; i++) {
        // Each beam has different movement patterns to avoid overlap
        // Offset phase for each beam to create different trajectories
        const phaseOffset = (i * Math.PI * 2) / beamCount;
        
        // Different frequency multipliers for each beam
        const freq1 = 0.7 + i * 0.3;
        const freq2 = 1.3 + i * 0.4;
        const freq3 = 0.8 + i * 0.2;
        const freq4 = 1.1 + i * 0.3;
        
        // Different regions for each beam to minimize overlap
        const regionOffsetX = i === 0 ? 0 : i === 1 ? 30 : -30;
        const regionOffsetY = i === 0 ? 0 : i === 1 ? -20 : 20;
        
        const x = 50 + regionOffsetX + Math.sin(t * freq1 + phaseOffset) * 40 * moveRange + Math.sin(t * freq2) * 30 * moveRange;
        const y = 50 + regionOffsetY + Math.cos(t * freq3 + phaseOffset) * 40 * moveRange + Math.cos(t * freq4) * 30 * moveRange;
        
        newBeamEnds.push({
          x: Math.max(0, Math.min(100, x)),
          y: Math.max(0, Math.min(100, y))
        });
      }
      
      setBeamEnds(newBeamEnds);
      frame++;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [frequency, length, beamCount]);

  return (
    <div className={`absolute inset-0 ${className}`} data-section="background-lights">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: brightness / 100 }}
      >
        <defs>
          {beamEnds.map((_, index) => (
            <linearGradient 
              key={`gradient-${index}`}
              id={`torchGradient-${index}`} 
              x1="0" 
              y1="100" 
              x2={beamEnds[index].x} 
              y2={beamEnds[index].y} 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 210, 0, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 210, 0, 0)" />
            </linearGradient>
          ))}
          <filter id="torchGlow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Torch light cones - one for each beam */}
        {beamEnds.map((beamEnd, index) => (
          <polygon
            key={`beam-${index}`}
            points={`
              0,100 
              ${beamEnd.x - spread * 0.15},${beamEnd.y - spread * 0.15} 
              ${beamEnd.x},${beamEnd.y} 
              ${beamEnd.x + spread * 0.15},${beamEnd.y + spread * 0.15}
            `}
            fill={`url(#torchGradient-${index})`}
            filter="url(#torchGlow)"
            opacity="0.6"
          />
        ))}
      </svg>
    </div>
  );
};
