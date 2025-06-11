import React, { useState } from 'react';
import dayjs from 'dayjs';
import useDummy from '../../store/useDummy';
import Card from '../../components/Card';

const Schedule = () => {
  const slots = useDummy((s) => s.providerSlots);
  const addSlot = useDummy((s) => s.addSlot);
  const appointments = useDummy((s) => s.appointments);
  const markDone = useDummy((s) => s.markAppointmentDone);

  const startHour = 8;
  const endHour = 18;
  const increments = (endHour - startHour) * 2; // 30 min increments
  const times = Array.from({ length: increments }, (_, i) =>
    dayjs().hour(startHour).minute(i * 30).format('HH:mm')
  );
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const handleMouseUp = (i) => {
    if (dragStart !== null) {
      const s = Math.min(dragStart, i);
      const e = Math.max(dragStart, i) + 1;
      addSlot({
        id: Date.now(),
        date: dayjs().format('YYYY-MM-DD'),
        start: times[s],
        end: times[e - 1],
      });
    }
    setDragStart(null);
    setDragEnd(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid grid-cols-1 divide-y">
          {times.map((t, i) => (
            <div
              key={t}
              className={`p-2 select-none ${
                dragStart !== null &&
                i >= Math.min(dragStart, dragEnd ?? dragStart) &&
                i <= Math.max(dragStart, dragEnd ?? dragStart)
                  ? 'bg-primary/30'
                  : ''
              }`}
              onMouseDown={() => setDragStart(i)}
              onMouseEnter={() => dragStart !== null && setDragEnd(i)}
              onMouseUp={() => handleMouseUp(i)}
            >
              {t}
            </div>
          ))}
        </div>
      </Card>
      <div className="space-y-2">
        <h3 className="font-semibold">Appointments</h3>
        {appointments.map((a) => (
          <div key={a.id} className="border p-2 rounded bg-white flex justify-between items-center">
            <span>
              {a.date} {a.time} - {a.customerName}
            </span>
            {a.status !== 'done' && (
              <button
                className="px-2 py-1 text-sm rounded bg-primary text-white"
                onClick={() => markDone(a.id)}
              >
                Mark Done
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
