import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="rounded-2xl shadow hover:scale-105 transform transition p-4 bg-white">
      {children}
    </div>
  );
};

export default Card;
