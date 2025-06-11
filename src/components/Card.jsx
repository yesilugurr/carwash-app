// 💄 UI polish
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative rounded-2xl p-4 bg-white before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10 shadow hover:drop-shadow-glow"
    >
      {children}
    </motion.div>
  );
};

export default Card;
