import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({open, onClose, children}) => (
  <Transition appear show={open} as={React.Fragment}>
    <Dialog as="div" className="relative z-20" onClose={onClose}>
      <div className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white dark:bg-baseDark rounded-xl p-4 shadow-lg">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
