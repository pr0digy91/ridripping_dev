import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick, type = 'button' }) => {
  return (
    <button
      className={`group relative px-8 py-4 bg-transparent text-brand-yellow font-semibold border-2 border-brand-yellow rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,210,0,0.5)] ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="relative z-10 group-hover:text-black group-hover:font-bold transition-colors duration-300">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/80 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default Button;