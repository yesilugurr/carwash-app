// ✨ showtime: polished UI/animation overhaul
import React, { lazy, Suspense, Fragment, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TopBar from "../components/TopBar";

const Landing = lazy(() => import("../pages/customer/Landing"));
const Services = lazy(() => import("../pages/customer/Services"));
const Booking = lazy(() => import("../pages/customer/Booking"));
const Appointments = lazy(() => import("../pages/customer/Appointments"));

const navLinks = [
  { to: "", label: "Home" },
  { to: "services", label: "Services" },
  { to: "appointments", label: "Appointments" },
];

const CustomerLayout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      {/* navigation */}
      <div className="relative">
        <nav className="hidden md:flex backdrop-blur bg-white/10 shadow-inner p-2 space-x-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1 rounded hover:underline ${
                location.pathname === (l.to ? `/customer/${l.to}` : "/customer")
                  ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient"
                  : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 md:hidden"
            onClose={setOpen}
          >
            <div className="fixed inset-0 bg-black/50" />
            <div className="fixed inset-0 flex items-start justify-end p-4">
              <Dialog.Panel className="bg-white/10 backdrop-blur shadow-inner rounded w-40 p-2 space-y-2">
                <button className="ml-auto" onClick={() => setOpen(false)}>
                  <XMarkIcon className="w-6 h-6" />
                </button>
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-1 rounded ${
                      location.pathname ===
                      (l.to ? `/customer/${l.to}` : "/customer")
                        ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="p-4 flex-1">
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
            >
              <Routes location={location}>
                <Route index element={<Landing />} />
                <Route path="services" element={<Services />} />
                <Route path="booking/:id" element={<Booking />} />
                <Route path="appointments" element={<Appointments />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
};

export default CustomerLayout;
