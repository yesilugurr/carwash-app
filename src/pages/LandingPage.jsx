// ✨ showtime: polished UI/animation overhaul
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const LandingPage = () => {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <motion.svg
        className="absolute -top-10 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <path
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,176C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
          fill="var(--color-surface)"
        />
      </motion.svg>
      <motion.div
        className="text-5xl font-display font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient"
        style={{ WebkitBackgroundClip: "text" }}
      >
        Premium Car Wash
      </motion.div>
      <motion.div
        className="mt-4 flex items-center gap-2 text-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <SparklesIcon className="w-6 h-6 text-accent" /> Fun &amp; Clean
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
