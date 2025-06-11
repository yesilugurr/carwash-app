// 💄 UI polish
import React, { lazy, Suspense, Fragment, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TopBar from '../components/TopBar';

const Overview = lazy(() => import('../pages/provider/Overview'));
const Schedule = lazy(() => import('../pages/provider/Schedule'));
const Services = lazy(() => import('../pages/provider/Services'));
const Products = lazy(() => import('../pages/provider/Products'));

const navLinks = [
  { to: '', label: 'Overview' },
  { to: 'schedule', label: 'Schedule' },
  { to: 'services', label: 'Services' },
  { to: 'products', label: 'Products' },
];

const ProviderLayout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="relative">
        <nav className="hidden md:flex backdrop-blur bg-white/10 shadow-inner p-2 space-x-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1 rounded hover:underline ${
                location.pathname === (l.to ? `/provider/${l.to}` : '/provider')
                  ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient'
                  : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Bars3Icon className="w-6 h-6" />
        </button>
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10 md:hidden" onClose={setOpen}>
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
                      location.pathname === (l.to ? `/provider/${l.to}` : '/provider')
                        ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient'
                        : 'hover:bg-white/20'
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
                <Route index element={<Overview />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Products />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
};

export default ProviderLayout;
