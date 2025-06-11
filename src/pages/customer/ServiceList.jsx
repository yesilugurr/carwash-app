// ✨ customer-refactor
import React, { useState } from 'react';
import useDummy from '../../store/useDummy';
import ServiceCard from '../../components/customer/ServiceCard';
import ServiceDetailModal from '../../components/customer/ServiceDetailModal';
import BookingModal from '../../components/customer/BookingModal';
import Toast from '../../components/customer/Toast';

const ServiceList = () => {
  const services = useDummy((s) => s.services);
  const selectedCategory = useDummy((s) => s.selectedCategory);
  const [detailFor, setDetailFor] = useState(null);
  const [bookFor, setBookFor] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const filtered = services.filter((s) =>
    s.specialties?.includes(selectedCategory)
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={(s) => setDetailFor(s)}
          />
        ))}
        {!filtered.length && <p>No services.</p>}
      </div>
      <ServiceDetailModal
        service={detailFor}
        open={!!detailFor}
        onClose={() => setDetailFor(null)}
        onBook={() => {
          setBookFor(detailFor);
          setDetailFor(null);
        }}
      />
      <BookingModal
        service={bookFor}
        open={!!bookFor}
        onClose={() => setBookFor(null)}
        onBooked={() => {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        }}
      />
      <Toast show={showToast} message="Booking confirmed" />
    </div>
  );
};

export default ServiceList;
