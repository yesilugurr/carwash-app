import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        <motion.h1
          className="text-2xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Find the perfect wash
        </motion.h1>
        <input
          type="text"
          placeholder="Search by specialty"
          className="w-full p-2 rounded text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        animate="show"
      >
        {top.map((service) => (
          <motion.div
            key={service.id}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
        {!top.length && <p>No services found.</p>}
      </motion.div>
    </div>
  );
};

export default Dashboard;
