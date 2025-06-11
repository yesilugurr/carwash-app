import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TopBar from '../components/TopBar';

const Overview = lazy(() => import('../pages/provider/Overview'));
const Schedule = lazy(() => import('../pages/provider/Schedule'));
const Services = lazy(() => import('../pages/provider/Services'));
const Products = lazy(() => import('../pages/provider/Products'));

const ProviderLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <nav className="bg-gray-100 p-2 space-x-4">
        <Link to="" className="hover:underline">
          Overview
        </Link>
        <Link to="schedule" className="hover:underline">
          Schedule
        </Link>
        <Link to="services" className="hover:underline">
          Services
        </Link>
        <Link to="products" className="hover:underline">
          Products
        </Link>
      </nav>
      <div className="p-4 flex-1">
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Overview />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Products />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
};

export default ProviderLayout;
