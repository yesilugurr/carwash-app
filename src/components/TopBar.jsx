// ✨ showtime: polished UI/animation overhaul
import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import {
  UserCircleIcon,
  SparklesIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const TopBar = () => {
  const location = useLocation();
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
  return (
    <header className="flex items-center justify-between p-4 bg-baseDark text-white dark:bg-slate-900">
      <div className="flex items-center gap-1 text-xl font-display font-bold text-primary">
        <SparklesIcon className="w-6 h-6 text-secondary" />
        CarWash
      </div>
      <div className="flex items-center gap-2">
        <button onClick={toggle} aria-label="Toggle theme">
          {dark ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-400" />
          )}
        </button>
        {location.pathname === "/" ? (
          <>
            <Link
              to="/login"
              className="h-10 px-6 rounded-lg bg-primary text-white flex items-center"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="h-10 px-6 rounded-lg bg-secondary text-black flex items-center"
            >
              Sign Up
            </Link>
          </>
        ) : (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center focus:outline-none">
            <UserCircleIcon className="w-8 h-8 text-gray-600" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block w-full px-4 py-2 text-sm text-left`}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block w-full px-4 py-2 text-sm text-left`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        )}
      </div>
    </header>
  );
};

export default TopBar;
