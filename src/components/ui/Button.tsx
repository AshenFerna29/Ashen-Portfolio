import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  animated?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  animated = true
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 overflow-hidden';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25',
    secondary: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-700',
    outline: 'border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800'
  };
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6'
  };
  const buttonContent = <>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {animated && <motion.span className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg opacity-0 z-0" whileHover={{
      opacity: 0.2
    }} transition={{
      duration: 0.3
    }} />}
    </>;
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return href ? <a href={href} className={allClasses}>
      {buttonContent}
    </a> : <button onClick={onClick} className={allClasses}>
      {buttonContent}
    </button>;
};
export default Button;