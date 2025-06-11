import React, { useState } from 'react';
import useDummy from '../../store/useDummy';
import ServiceMasonry from '../../components/customer/ServiceMasonry';
import ServiceDetail from './Detail';
import { motion } from 'framer-motion';

const Services = () => {
  const services = useDummy((s) => s.services);
  const category = useDummy((s) => s.selectedCategory);
  const [detail, setDetail] = useState(null);

  const filtered = services.filter((s) => s.specialties?.includes(category));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
    >
      <ServiceMasonry services={filtered} onSelect={(s) => setDetail(s)} />
      {detail && (
        <ServiceDetail service={detail} onClose={() => setDetail(null)} />
      )}
    </motion.div>
  );
};

export default Services;
