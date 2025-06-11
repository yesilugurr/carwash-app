// ✨ showtime: polished UI/animation overhaul
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useDummy from "../../store/useDummy";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const appointments = useDummy((s) => s.appointments);

  const events = appointments.map((a) => ({
    title: a.customerName,
    start: new Date(`${a.date}T${a.time}`),
    end: new Date(`${a.date}T${a.time}`),
    allDay: false,
  }));

  return (
    <div className="h-[600px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", background: "var(--color-surface)" }}
      />
    </div>
  );
};

export default Schedule;
