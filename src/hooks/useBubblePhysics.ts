import { useEffect, useRef, useState } from 'react';
import { BUBBLE_COUNT, DEFAULT_PHYSICS_SPEED, HERO_ANIMATION_OPACITY, BOUNCE_SPEED, LOWER_RADIUS, HIGHER_RADIUS } from '../config/heroAnimation';

export interface Bubble {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const useBubblePhysics = () => {
  const animationRef = useRef<number | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Initialize bubbles
  useEffect(() => {
    const baseOpacities = [0.7, 0.8, 0.9, 1.0]; // base opacity per bubble - higher base values

    const initialBubbles: Bubble[] = Array.from({ length: BUBBLE_COUNT }, (_, index) => {
      // Random size between LOWER_RADIUS and HIGHER_RADIUS
      const size = Math.random() * (HIGHER_RADIUS - LOWER_RADIUS) + LOWER_RADIUS;

      return {
        id: index,
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + window.innerHeight, // Start from bottom
        vx: (Math.random() - 0.5) * DEFAULT_PHYSICS_SPEED.horizontal * 2, // Use physics speed
        vy: DEFAULT_PHYSICS_SPEED.upward + (Math.random() - 0.5) * 0.4, // Base speed with variation
        size: size,
        opacity: baseOpacities[Math.floor(Math.random() * baseOpacities.length)] * HERO_ANIMATION_OPACITY // Apply global opacity
      };
    });

    setBubbles(initialBubbles);
  }, []);

  // Collision detection and physics
  const checkCollision = (bubble1: Bubble, bubble2: Bubble): boolean => {
    const dx = bubble1.x - bubble2.x;
    const dy = bubble1.y - bubble2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = (bubble1.size + bubble2.size) / 2;
    return distance < minDistance;
  };

  const resolveCollision = (bubble1: Bubble, bubble2: Bubble) => {
    const dx = bubble1.x - bubble2.x;
    const dy = bubble1.y - bubble2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize collision vector
    const nx = dx / distance;
    const ny = dy / distance;

    // Separate bubbles to prevent overlap
    const overlap = (bubble1.size + bubble2.size) / 2 - distance;
    const separationX = nx * overlap * 0.5;
    const separationY = ny * overlap * 0.5;

    bubble1.x += separationX;
    bubble1.y += separationY;
    bubble2.x -= separationX;
    bubble2.y -= separationY;

    // Calculate relative velocity
    const dvx = bubble1.vx - bubble2.vx;
    const dvy = bubble1.vy - bubble2.vy;

    // Calculate relative velocity in collision normal direction
    const dvn = dvx * nx + dvy * ny;

    // Do not resolve if velocities are separating
    if (dvn > 0) return;

    // Calculate restitution (bounciness)
    const restitution = BOUNCE_SPEED;

    // Calculate impulse scalar
    const j = -(1 + restitution) * dvn;

    // Apply impulse
    const impulseX = j * nx;
    const impulseY = j * ny;

    bubble1.vx += impulseX;
    bubble1.vy += impulseY;
    bubble2.vx -= impulseX;
    bubble2.vy -= impulseY;
  };

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setBubbles(prevBubbles => {
        const newBubbles = [...prevBubbles];

        // Update positions (no wall collisions)
        newBubbles.forEach(bubble => {
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;

          // Reset bubbles that go off screen (top only)
          if (bubble.y < -bubble.size) {
            bubble.y = window.innerHeight + bubble.size;
            bubble.x = Math.random() * window.innerWidth;
            bubble.vy = DEFAULT_PHYSICS_SPEED.upward + (Math.random() - 0.5) * 0.4;
            bubble.vx = (Math.random() - 0.5) * DEFAULT_PHYSICS_SPEED.horizontal * 2;
          }
        });

        // Check collisions between bubbles
        for (let i = 0; i < newBubbles.length; i++) {
          for (let j = i + 1; j < newBubbles.length; j++) {
            if (checkCollision(newBubbles[i], newBubbles[j])) {
              resolveCollision(newBubbles[i], newBubbles[j]);
            }
          }
        }

        return newBubbles;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    if (bubbles.length > 0) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bubbles.length]);

  return bubbles;
};