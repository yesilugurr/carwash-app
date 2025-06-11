import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const TopBar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-xl font-bold text-primary">CarWash</div>
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
                      active ? 'bg-gray-100' : ''
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
                      active ? 'bg-gray-100' : ''
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
    </header>
  );
};

export default TopBar;
