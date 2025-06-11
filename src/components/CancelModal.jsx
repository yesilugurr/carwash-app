import React from 'react';
import useDummy from '../store/useDummy';

const CancelModal = ({ appointmentId, open, onClose }) => {
  const deleteAppointment = useDummy((s) => s.deleteAppointment);

  if (!open) return null;

  const handleCancel = () => {
    deleteAppointment(appointmentId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-4 rounded w-72 space-y-4">
        <h2 className="text-lg font-semibold">Cancel appointment?</h2>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200">No</button>
          <button onClick={handleCancel} className="px-3 py-1 rounded bg-primary text-white">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
