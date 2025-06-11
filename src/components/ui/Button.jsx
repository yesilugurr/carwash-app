// ✨ customer-refactor
import React from 'react';

const Button = ({ className = '', children, ...props }) => (
  <button
    className={`bg-primary text-white hover:bg-primary/90 rounded-xl shadow-md px-4 py-2 focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
