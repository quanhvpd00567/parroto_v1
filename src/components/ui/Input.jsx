import React from 'react';

const Input = ({
  label,
  id,
  icon,
  type = 'text',
  placeholder = '',
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-surface-container-low border-none rounded-lg px-6 py-4 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none ${icon ? 'pl-12' : ''}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
