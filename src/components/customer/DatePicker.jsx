import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePicker = ({ selected, onSelect, available }) => (
  <DayPicker
    mode="single"
    selected={selected}
    onSelect={onSelect}
    modifiers={{ available: available.map((d) => new Date(d)) }}
    modifiersClassNames={{ available: 'bg-primary/20' }}
    disabled={(day) => !available.find((d) => new Date(d).toDateString() === day.toDateString())}
  />
);

export default DatePicker;
