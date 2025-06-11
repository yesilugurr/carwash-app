import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <Link className="h-10 px-6 rounded-lg bg-primary text-white flex items-center" to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;
