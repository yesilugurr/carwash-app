// ✨ showtime: polished UI/animation overhaul
import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const CustomerLayout = lazy(() => import("./layouts/CustomerLayout"));
const ProviderLayout = lazy(() => import("./layouts/ProviderLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer/*" element={<CustomerLayout />} />
          <Route path="/provider/*" element={<ProviderLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
