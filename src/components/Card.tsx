import React from 'react';
import Button from './Button';

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, buttonText = "Learn More" }) => {
  return (
    <div className="group bg-black rounded-2xl p-8 sm:p-12 shadow-2xl hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] border border-black/20">
      <div className="flex flex-col gap-6">
        {/* Card Icon/Badge */}
        <div className="inline-flex w-16 h-16 bg-yellow-500 rounded-xl items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="w-8 h-8 text-black" />
        </div>

        {/* Card Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-lg text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Card Button */}
        <div className="mt-4">
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;