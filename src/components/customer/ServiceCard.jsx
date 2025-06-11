import React from 'react';
import Tilt from 'react-parallax-tilt';
import RatingStars from './RatingStars';
import Button from '../ui/Button';

const ServiceCard = ({ service, onSelect }) => (
  <Tilt
    tiltEnable={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
    tiltMaxAngleX={5}
    tiltMaxAngleY={5}
    className="relative bg-surface dark:bg-slate-800 rounded-xl p-4 shadow before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 hover:drop-shadow-glow"
  >
    <img src={service.avatar} alt={service.name} className="w-20 h-20 mx-auto rounded-full object-cover ring-2 ring-primary mb-2" />
    <h3 className="text-center font-semibold">{service.name}</h3>
    <RatingStars value={service.ratings} />
    <p className="text-sm text-center text-gray-500 mt-1">{service.location}</p>
    <Button className="w-full mt-3" onClick={() => onSelect(service)} aria-label="View details">Details</Button>
  </Tilt>
);

export default ServiceCard;
