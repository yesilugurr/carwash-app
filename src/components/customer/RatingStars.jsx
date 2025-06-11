import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const RatingStars = ({ value = 0 }) => {
  const rating = Math.round(value);
  return (
    <div className="flex gap-0.5 text-yellow-400 justify-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`w-4 h-4 ${i < rating ? '' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

export default RatingStars;
