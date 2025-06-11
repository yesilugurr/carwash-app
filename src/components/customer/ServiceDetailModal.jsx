// ✨ customer-refactor
import React from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const ServiceDetailModal = ({ service, open, onClose, onBook }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex items-end sm:items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 space-y-4"
            >
              <Dialog.Title className="text-lg font-semibold text-center">
                {service.name}
              </Dialog.Title>
              <Tab.Group>
                <Tab.List className="flex gap-2 mb-2">
                  {['Overview', 'Gallery', 'Reviews'].map((t) => (
                    <Tab
                      key={t}
                      className={({ selected }) =>
                        `flex-1 py-1 rounded ${selected ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-slate-700'}`
                      }
                    >
                      {t}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="space-y-2 text-sm">
                    <p>{service.description || 'No description.'}</p>
                    <div className="flex flex-wrap gap-1">
                      {(service.specialties || []).map((p) => (
                        <span key={p} className="px-2 py-1 bg-secondary text-black rounded-full text-xs">
                          {p}
                        </span>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="flex overflow-x-auto gap-2">
                      {(service.gallery || []).slice(0,3).map((img, i) => (
                        <img key={i} src={img} loading="lazy" alt="gallery" className="w-40 h-24 rounded object-cover" />
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="space-y-2 text-sm">
                    {(service.reviews || ['Great service!', 'Loved it', 'Amazing']).map((r, i) => (
                      <p key={i}>&ldquo;{r}&rdquo;</p>
                    ))}
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              <Button className="w-full" onClick={onBook} aria-label="Book Now">
                Book Now
              </Button>
            </motion.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ServiceDetailModal;
