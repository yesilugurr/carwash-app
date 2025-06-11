// ✨ customer-refactor
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

const Toast = ({ show, message }) => (
  <Transition
    show={show}
    as={Fragment}
    enter="transition ease-out duration-300"
    enterFrom="transform opacity-0 translate-y-2"
    enterTo="transform opacity-100 translate-y-0"
    leave="transition ease-in duration-200"
    leaveFrom="transform opacity-100 translate-y-0"
    leaveTo="transform opacity-0 translate-y-2"
  >
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-xl shadow-md">
      {message}
    </div>
  </Transition>
);

export default Toast;
