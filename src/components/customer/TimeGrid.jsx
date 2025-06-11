import React from 'react';

const TimeGrid = ({ times = [], value, onChange }) => (
  <div className="grid grid-cols-3 gap-2">
    {times.map((t) => (
      <label key={t} className="flex items-center gap-1 cursor-pointer">
        <input
          type="radio"
          className="form-radio text-primary"
          name="time"
          value={t}
          checked={value === t}
          onChange={() => onChange(t)}
        />
        <span>{t}</span>
      </label>
    ))}
    {!times.length && <p className="col-span-3 text-sm text-gray-500">No times</p>}
  </div>
);

export default TimeGrid;
