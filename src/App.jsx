import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const CustomerLayout = lazy(() => import('./layouts/CustomerLayout'));
const ProviderLayout = lazy(() => import('./layouts/ProviderLayout'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer/*" element={<CustomerLayout />} />
        <Route path="/provider/*" element={<ProviderLayout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
