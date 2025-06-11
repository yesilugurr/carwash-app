import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Customer', to: '/customer' },
  { name: 'Provider', to: '/provider' },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="md:hidden p-2 text-gray-600"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      <Transition
        as={Fragment}
        show={open}
        enter="transition transform duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition transform duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <nav className="fixed inset-y-0 left-0 w-48 bg-white shadow-lg md:static md:translate-x-0 md:block">
          <ul className="p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-2 py-1 rounded hover:bg-gray-100 ${
                    location.pathname === link.to ? 'text-primary font-semibold' : ''
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </div>
  );
};

export default Sidebar;
