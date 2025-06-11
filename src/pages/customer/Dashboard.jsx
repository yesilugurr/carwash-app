// ✨ showtime: polished UI/animation overhaul
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Combobox } from "@headlessui/react";
import useDummy from "../../store/useDummy";
import ServiceCard from "../../components/ServiceCard";
import Masonry from "react-masonry-css";

const Dashboard = () => {
  const services = useDummy((s) => s.services);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = services.filter((s) =>
    s.specialties.join(" ").toLowerCase().includes(query.toLowerCase()),
  );

  const top = [...filtered].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  return (
    <div>
      <div className="bg-white/10 backdrop-blur p-6 rounded mb-4 space-y-2 animate-pulse">
        <motion.h1
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Find the perfect wash
        </motion.h1>
        <Combobox value={query} onChange={setQuery}>
          <Combobox.Input
            className="w-full p-2 rounded text-black"
            placeholder="Search by specialty"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Combobox>
      </div>
      <motion.div
        className=""
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        animate="show"
      >
        <Masonry
          breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
          className="flex w-auto gap-4"
          columnClassName="my-masonry-grid_column"
        >
          {top.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {loading ? (
                <div className="h-40 bg-gray-200 rounded animate-pulse" />
              ) : (
                <ServiceCard service={service} />
              )}
            </motion.div>
          ))}
        </Masonry>
        {!top.length && <p>No services found.</p>}
      </motion.div>
    </div>
  );
};

export default Dashboard;
