import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CategoryChips from '../../components/customer/CategoryChips';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Landing = () => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
  >
    <div className="relative overflow-hidden py-20">
      <svg className="absolute inset-x-0 -top-10 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="var(--color-surface)">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z;M0,96L60,117.3C120,139,240,181,360,213.3C480,245,600,267,720,250.7C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z;M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,138.7C1120,139,1280,181,1360,197.3L1440,224V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z" />
        </path>
      </svg>
      <h1 className="text-5xl font-display font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
        Find Your Shine
      </h1>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-4 flex items-center justify-center gap-2">
        <SparklesIcon className="w-6 h-6 text-accent" />
        <span className="text-lg">Book the best car wash services</span>
      </motion.div>
      <div className="mt-10">
        <Link to="services" className="px-6 py-2 rounded-xl bg-primary text-white shadow">Browse Services</Link>
      </div>
    </div>
    <CategoryChips />
  </motion.div>
);

export default Landing;
