// 💄 UI polish
import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const CustomerLayout = lazy(() => import('./layouts/CustomerLayout'));
const ProviderLayout = lazy(() => import('./layouts/ProviderLayout'));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer/*" element={<CustomerLayout />} />
          <Route path="/provider/*" element={<ProviderLayout />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
