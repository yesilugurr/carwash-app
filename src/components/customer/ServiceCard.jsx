// ✨ customer-refactor
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { StarIcon } from '@heroicons/react/20/solid';
import Button from '../ui/Button';

const ServiceCard = ({ service, onSelect }) => {
  const rating = Math.round(service.ratings || 0);
  return (
    <Tilt
      tiltEnable={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="relative rounded-xl bg-white dark:bg-slate-800 p-4 shadow before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 hover:drop-shadow-glow"
    >
      {service.avatar && (
        <img
          src={service.avatar}
          loading="lazy"
          alt={service.name}
          className="w-16 h-16 mx-auto mb-2 rounded-full object-cover ring-2 ring-primary"
        />
      )}
      <h3 className="text-center font-semibold">{service.name}</h3>
      <div className="mt-1 flex items-center justify-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`w-4 h-4 ${i < rating ? '' : 'text-gray-300'}`} />
        ))}
      </div>
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-center">
        {service.location}
      </div>
      <Button className="w-full mt-3" onClick={() => onSelect(service)} aria-label="Details / Book">
        Details / Book
      </Button>
    </Tilt>
  );
};

export default ServiceCard;
