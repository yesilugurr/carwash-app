import React from 'react';
import Masonry from 'react-masonry-css';
import ServiceCard from './ServiceCard';

const ServiceMasonry = ({ services, onSelect }) => (
  <Masonry
    breakpointCols={{ default: 3, 768: 2, 640: 1 }}
    className="flex w-auto -ml-4"
    columnClassName="pl-4 mb-4"
  >
    {services.map((s) => (
      <ServiceCard key={s.id} service={s} onSelect={onSelect} />
    ))}
  </Masonry>
);

export default ServiceMasonry;
