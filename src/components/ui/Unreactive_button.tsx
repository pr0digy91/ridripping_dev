import React from 'react';

interface UnreactiveButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const UnreactiveButton: React.FC<UnreactiveButtonProps> = ({ children, className = "", onClick, type = 'button' }) => {
  return (
    <button
      className={`px-8 py-4 bg-black text-yellow-300 font-semibold rounded-lg transition-transform duration-200 hover:scale-105 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default UnreactiveButton;
