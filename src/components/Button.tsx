import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`group relative px-8 py-4 bg-transparent text-yellow-500 font-semibold border-2 border-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 group-hover:text-black group-hover:font-bold transition-colors duration-300">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default Button;