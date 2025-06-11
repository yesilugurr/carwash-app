import React from 'react';
import Modal from '../../components/ui/Modal';
import RatingStars from '../../components/customer/RatingStars';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Detail = ({ service, onClose }) => {
  const navigate = useNavigate();
  if (!service) return null;
  const slots = service.availableSlots || [];
  return (
    <Modal open={!!service} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      >
        <h2 className="text-lg font-semibold text-center mb-2">{service.name}</h2>
        <RatingStars value={service.ratings} />
        <p className="text-sm mt-2">{service.description || 'No description'}</p>
        <div className="mt-4 text-right">
          <Button onClick={() => navigate(`/customer/booking/${service.id}`)} aria-label="Book service">Book</Button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default Detail;
