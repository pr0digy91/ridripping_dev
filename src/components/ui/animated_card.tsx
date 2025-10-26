import React from 'react';
import { motion } from 'framer-motion';
import { useTiltAnimation } from '../../hooks/useTiltAnimation';

interface AnimatedCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bold_text?: string;
  description: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon: Icon, title, bold_text, description }) => {
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
        className="flex flex-col gap-6 items-center"
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
          className="text-3xl sm:text-4xl font-bold text-brand-yellow text-center"
        >
          {title}
        </h3>

        {/* Bold Text */}
        {bold_text && (
          <p
            style={{
              transform: 'translateZ(8px)',
            }}
            className="text-xl sm:text-2xl font-bold text-gray-100 text-center"
          >
            {bold_text}
          </p>
        )}

        {/* Card Description */}
        <p
          style={{
            transform: 'translateZ(5px)',
          }}
          className="text-lg text-gray-200 leading-relaxed text-center"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;