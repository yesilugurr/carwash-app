import React, { useState } from 'react';
import useDummy from '../../store/useDummy';
import RescheduleModal from '../../components/RescheduleModal';
import CancelModal from '../../components/CancelModal';

const Appointments = () => {
  const services = useDummy((s) => s.services);
  const appointments = useDummy((s) => s.appointments);
  const [tab, setTab] = useState('upcoming');
  const [rescheduleFor, setRescheduleFor] = useState(null);
  const [cancelFor, setCancelFor] = useState(null);

  const now = new Date();
  const upcoming = appointments.filter((a) => new Date(`${a.date}T${a.time}`) >= now);
  const past = appointments.filter((a) => new Date(`${a.date}T${a.time}`) < now);

  const list = tab === 'upcoming' ? upcoming : past;

  const getService = (id) => services.find((s) => s.id === id) || {};

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded ${tab === 'upcoming' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-3 py-1 rounded ${tab === 'past' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('past')}
        >
          Past
        </button>
      </div>
      <div className="space-y-2">
        {list.map((a) => {
          const service = getService(a.serviceId);
          return (
            <div key={a.id} className="border p-4 rounded bg-white space-y-1">
              <div className="font-semibold">{service.name}</div>
              <div className="text-sm text-gray-600">
                {a.date} at {a.time}
              </div>
              {tab === 'upcoming' && (
                <div className="space-x-2 mt-2">
                  <button
                    className="px-2 py-1 text-sm rounded bg-gray-200"
                    onClick={() => setRescheduleFor({ appt: a, service })}
                  >
                    Reschedule
                  </button>
                  <button
                    className="px-2 py-1 text-sm rounded bg-red-500 text-white"
                    onClick={() => setCancelFor(a.id)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          );
        })}
        {!list.length && <p>No appointments.</p>}
      </div>
      {rescheduleFor && (
        <RescheduleModal
          appointment={rescheduleFor.appt}
          service={rescheduleFor.service}
          open={!!rescheduleFor}
          onClose={() => setRescheduleFor(null)}
        />
      )}
      {cancelFor && (
        <CancelModal appointmentId={cancelFor} open={!!cancelFor} onClose={() => setCancelFor(null)} />
      )}
    </div>
  );
};

export default Appointments;
