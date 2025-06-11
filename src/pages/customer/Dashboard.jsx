import React, { useState } from 'react';
import useDummy from '../../store/useDummy';
import ServiceCard from '../../components/ServiceCard';

const Dashboard = () => {
  const services = useDummy((s) => s.services);
  const [query, setQuery] = useState('');

  const filtered = services.filter((s) =>
    s.specialties.join(' ').toLowerCase().includes(query.toLowerCase())
  );

  const top = [...filtered]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <div>
      <div className="bg-primary text-white p-6 rounded mb-4 space-y-2">
        <h1 className="text-2xl font-bold">Find the perfect wash</h1>
        <input
          type="text"
          placeholder="Search by specialty"
          className="w-full p-2 rounded text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {top.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        {!top.length && <p>No services found.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
