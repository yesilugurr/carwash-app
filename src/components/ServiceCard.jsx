// ✨ showtime: polished UI/animation overhaul
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ServiceCard = ({ service, onSelect }) => {
  const rating = Math.round(service.ratings || 0);
  return (
    <motion.div whileHover={{ y: -4 }} className="group relative rounded-xl">
      <div className="p-px rounded-xl transition-all group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
        <Tilt
          tiltEnable={
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          }
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="bg-white rounded-[inherit] p-4 shadow"
        >
          {service.avatar && (
            <img
              src={service.avatar}
              alt={service.name}
              className="w-20 h-20 mx-auto mb-3 rounded-full object-cover ring-2 ring-primary"
            />
          )}
          <h3 className="text-center text-lg font-semibold">{service.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex relative">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <motion.span
                className="absolute -top-1 -right-3 text-yellow-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <SparklesIcon className="w-4 h-4" />
              </motion.span>
            </div>
            <span className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600">
              {service.location}
            </span>
          </div>
          <button
            className="mt-4 w-full rounded bg-primary py-2 text-white hover:bg-primary/90 relative overflow-hidden"
            onClick={() => onSelect?.(service)}
          >
            <span className="ripple absolute inset-0"></span>
            <span className="relative">Book Now</span>
          </button>
        </Tilt>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
