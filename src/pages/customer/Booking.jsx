import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDummy from '../../store/useDummy';
import DatePicker from '../../components/customer/DatePicker';
import TimeGrid from '../../components/customer/TimeGrid';
import Button from '../../components/ui/Button';
import ConfirmToast from '../../components/customer/ConfirmToast';
import { motion } from 'framer-motion';

const Booking = () => {
  const { id } = useParams();
  const services = useDummy((s) => s.services);
  const addAppointment = useDummy((s) => s.addAppointment);
  const service = services.find((s) => String(s.id) === id);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [date, setDate] = useState();
  const [time, setTime] = useState('');
  const [toast, setToast] = useState(false);

  if (!service) return <p>Service not found</p>;

  const availableDays = service.availableSlots.map((s) => s.date);
  const times = date
    ? service.availableSlots.find((s) => s.date === date.toISOString().slice(0, 10))?.times || []
    : [];

  const confirm = () => {
    addAppointment({ id: Date.now(), serviceId: service.id, customerName: 'Guest', date: date.toISOString().slice(0,10), time });
    setToast(true);
    setTimeout(() => {
      setToast(false);
      navigate('/customer/appointments');
    }, 1500);
  };

  return (
    <motion.div
      className="max-w-md mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
    >
      <h2 className="text-xl font-semibold text-center">Book {service.name}</h2>
      {step === 1 && (
        <>
          <DatePicker selected={date} onSelect={setDate} available={availableDays} />
          <div className="text-right">
            <Button disabled={!date} onClick={() => setStep(2)}>Next</Button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <TimeGrid times={times} value={time} onChange={setTime} />
          <div className="flex justify-between">
            <Button onClick={() => setStep(1)}>Back</Button>
            <Button disabled={!time} onClick={() => setStep(3)}>Next</Button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <p className="text-center">Confirm booking on {date?.toISOString().slice(0,10)} at {time}?</p>
          <div className="flex justify-between">
            <Button onClick={() => setStep(2)}>Back</Button>
            <Button onClick={confirm}>Confirm</Button>
          </div>
        </>
      )}
      <ConfirmToast show={toast} message="Booking confirmed" />
    </motion.div>
  );
};

export default Booking;
