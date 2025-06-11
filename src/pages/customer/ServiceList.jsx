// ✨ showtime: polished UI/animation overhaul
import React, { useState } from "react";
import useDummy from "../../store/useDummy";
import ServiceCard from "../../components/ServiceCard";
import BookingModal from "../../components/BookingModal";

const ServiceList = () => {
  const services = useDummy((s) => s.services);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={() => setSelected(service)}
          />
        ))}
      </div>
      {selected && (
        <BookingModal
          service={selected}
          open={!!selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default ServiceList;
