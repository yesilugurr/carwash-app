// ✨ customer-refactor
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { DayPicker } from 'react-day-picker';
import Button from '../ui/Button';
import useDummy from '../../store/useDummy';
import 'react-day-picker/dist/style.css';

const BookingModal = ({ service, open, onClose, onBooked }) => {
  const addAppointment = useDummy((s) => s.addAppointment);
  const [selectedDay, setSelectedDay] = useState();
  const [time, setTime] = useState('');

  if (!service) return null;

  const slots = service.availableSlots || [];
  const availableDays = slots.map((s) => new Date(s.date));
  const times = selectedDay
    ? slots.find((s) => s.date === selectedDay.toISOString().slice(0, 10))?.times || []
    : [];

  const handleConfirm = () => {
    if (selectedDay && time) {
      addAppointment({
        id: Date.now(),
        serviceId: service.id,
        customerName: 'Guest',
        date: selectedDay.toISOString().slice(0, 10),
        time,
      });
      onBooked?.();
      onClose();
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white dark:bg-slate-800 p-4 space-y-4">
            <Dialog.Title className="text-lg font-semibold text-center">
              Book {service.name}
            </Dialog.Title>
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              modifiers={{ available: availableDays }}
              modifiersClassNames={{ available: 'bg-primary/20' }}
              disabled={(day) => !availableDays.find((d) => d.toDateString() === day.toDateString())}
            />
            {selectedDay && (
              <div>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t) => (
                    <label key={t} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="time"
                        value={t}
                        checked={time === t}
                        onChange={() => setTime(t)}
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
                {!times.length && <p className="text-sm text-gray-500 mt-2">No times</p>}
              </div>
            )}
            <div className="flex justify-end gap-2">
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
