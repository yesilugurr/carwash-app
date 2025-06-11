// ✨ customer-refactor
import React from 'react';

const Input = ({ className = '', ...props }) => (
  <input
    className={`border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary bg-surface text-gray-900 dark:bg-baseDark dark:text-slate-100 ${className}`}
    {...props}
  />
);

export default Input;
