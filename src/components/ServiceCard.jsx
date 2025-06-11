import React from 'react';

const ServiceCard = ({ service, onClick }) => (
  <div
    className="rounded shadow hover:shadow-lg p-4 cursor-pointer bg-white"
    onClick={() => onClick && onClick(service)}
  >
    {service.avatar && (
      <img
        src={service.avatar}
        alt={service.name}
        className="w-full h-32 object-cover rounded mb-2"
      />
    )}
    <h3 className="font-semibold text-lg">{service.name}</h3>
    <p className="text-sm text-gray-500">{service.location}</p>
    <p className="text-sm">Rating: {service.ratings}</p>
  </div>
);

export default ServiceCard;
