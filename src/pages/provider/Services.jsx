import React from 'react';
import useDummy from '../../store/useDummy';

const packagesList = ['Exterior', 'Interior', 'Detailing', 'Paint Protection'];

const Services = () => {
  const packages = useDummy((s) => s.packages);
  const toggle = useDummy((s) => s.togglePackage);

  return (
    <table className="w-full bg-white rounded shadow">
      <thead>
        <tr className="text-left">
          <th className="p-2">Package</th>
          <th className="p-2">Offered</th>
        </tr>
      </thead>
      <tbody>
        {packagesList.map((name) => (
          <tr key={name} className="border-t">
            <td className="p-2">{name}</td>
            <td className="p-2">
              <input
                type="checkbox"
                checked={packages[name]}
                onChange={() => toggle(name)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Services;
