// ✨ customer-refactor
import React from 'react';
import CategoryChips from '../../components/customer/CategoryChips';
import ServiceList from './ServiceList';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-display font-semibold mb-4">Find Services</h1>
      <CategoryChips />
      <ServiceList />
    </div>
  );
};

export default Dashboard;
