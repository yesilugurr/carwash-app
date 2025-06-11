import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const Dashboard = lazy(() => import('../pages/customer/Dashboard'));
const ServiceList = lazy(() => import('../pages/customer/ServiceList'));
const Appointments = lazy(() => import('../pages/customer/Appointments'));

const CustomerLayout = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <nav className="bg-gray-100 p-2 space-x-4">
      <Link to="" className="hover:underline">
        Dashboard
      </Link>
      <Link to="services" className="hover:underline">
        Services
      </Link>
      <Link to="appointments" className="hover:underline">
        Appointments
      </Link>
    </nav>
    <div className="p-4 flex-1">
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<ServiceList />} />
          <Route path="appointments" element={<Appointments />} />
        </Routes>
      </Suspense>
    </div>
  </div>
);

export default CustomerLayout;
