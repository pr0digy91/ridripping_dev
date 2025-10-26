import React from 'react';
import { motion } from 'framer-motion';
import { useTiltAnimation } from '../../hooks/useTiltAnimation';

interface AnimatedCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon: Icon, title, description }) => {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTiltAnimation();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="group bg-black rounded-2xl p-8 sm:p-12 shadow-2xl hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] border border-black/20"
    >
      <div
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
        className="flex flex-col gap-6"
      >
        {/* Card Icon/Badge */}
        <div
          style={{
            transform: 'translateZ(15px)',
          }}
          className="inline-flex w-16 h-16 bg-brand-yellow rounded-xl items-center justify-center"
        >
          <Icon className="w-8 h-8 text-black" />
        </div>

        {/* Card Title */}
        <h3
          style={{
            transform: 'translateZ(10px)',
          }}
          className="text-3xl sm:text-4xl font-bold text-brand-yellow"
        >
          {title}
        </h3>

        {/* Card Description */}
        <p
          style={{
            transform: 'translateZ(5px)',
          }}
          className="text-lg text-gray-200 leading-relaxed"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;