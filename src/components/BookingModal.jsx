import React, { useState } from 'react';
import useDummy from '../store/useDummy';

const BookingModal = ({ service, open, onClose }) => {
  const addAppointment = useDummy((s) => s.addAppointment);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!open) return null;

  const slots = service.availableSlots || [];
  const timesForDate =
    slots.find((s) => s.date === date)?.times || [];

  const handleBook = () => {
    if (date && time) {
      addAppointment({
        id: Date.now(),
        serviceId: service.id,
        customerName: 'Guest',
        date,
        time,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-4 rounded w-80 space-y-4">
        <h2 className="text-lg font-semibold">Book {service.name}</h2>
        <div>
          <label className="block text-sm">Date</label>
          <input
            type="date"
            className="border rounded p-1 w-full"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime('');
            }}
          />
        </div>
        {date && (
          <div>
            <label className="block text-sm mb-1">Time</label>
            <div className="space-y-1">
              {timesForDate.map((t) => (
                <label key={t} className="flex items-center space-x-2">
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
              {!timesForDate.length && <p className="text-sm text-gray-500">No times</p>}
            </div>
          </div>
        )}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200">Cancel</button>
          <button onClick={handleBook} className="px-3 py-1 rounded bg-primary text-white">Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
