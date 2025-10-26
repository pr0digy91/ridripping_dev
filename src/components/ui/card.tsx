import React from 'react';

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bold_text?: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, bold_text, description }) => {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        p-8 sm:p-12
        bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5
        border-2
        border-brand-yellow/40
        shadow-xl
        overflow-hidden
        backdrop-blur-[12px]
        hover:scale-[1.022]
        transition-all duration-500
      "
      style={{
        boxShadow: "0 8px 48px 0 rgba(8,8,16,0.28)",
      }}
      data-section="glass-card"
    >
      {/* Extra Glass Layer for Reflection */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl backdrop-blur-lg bg-white/5" />
      {/* Soft Shine Accent */}
      <div className="absolute left-6 right-6 top-0 h-2 rounded-xl blur-[10px] bg-brand-yellow/10" />
      {/* Card Content */}
      <div className="flex flex-col gap-6 z-10 relative items-center">
        {/* Card Icon/Badge */}
        <div className="
          inline-flex w-16 h-16 rounded-xl items-center justify-center
          bg-gray-900/80 shadow-lg
          border border-brand-yellow/40
          backdrop-blur-[4px]
          transition-all duration-400
          group-hover:bg-brand-yellow group-hover:shadow-[0_0_32px_8px_rgba(255,214,0,0.25)]
        ">
          <Icon className="w-8 h-8 text-brand-yellow group-hover:text-black transition-colors duration-400" />
        </div>
        {/* Card Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-brand-yellow text-center">
          {title}
        </h3>
        {/* Bold Text */}
        {bold_text && (
          <p className="text-xl sm:text-2xl font-bold text-gray-100 text-center">
            {bold_text}
          </p>
        )}
        {/* Card Description */}
        <p className="text-lg text-gray-200 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
