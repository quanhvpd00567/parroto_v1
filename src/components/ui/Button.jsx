import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = "font-headline font-bold py-4 transition-all duration-200 text-center";

  const variants = {
    primary: "bg-primary text-on-primary rounded-xl shadow-[0_8px_20px_rgba(0,40,142,0.2)] hover:scale-[1.02] active:scale-[0.98]",
    gradient: "bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl shadow-[0_8px_20px_rgba(0,40,142,0.2)] hover:scale-[1.02] active:scale-[0.98]",
    outline: "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors group",
    secondary: "bg-secondary text-on-secondary rounded-xl hover:opacity-90 active:scale-95"
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${className} w-full`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
