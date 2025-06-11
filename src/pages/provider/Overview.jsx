import React from 'react';
import dayjs from 'dayjs';
import useDummy from '../../store/useDummy';
import Card from '../../components/Card';

const Overview = () => {
  const appointments = useDummy((s) => s.appointments);
  const products = useDummy((s) => s.products);

  const total = appointments.length;
  const today = dayjs().format('YYYY-MM-DD');
  const todayCount = appointments.filter((a) => a.date === today).length;
  const lowStock = products.filter((p) => p.qty < 5).length;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card>
        <h3 className="text-lg font-semibold">Total Bookings</h3>
        <p className="text-2xl">{total}</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Today's Bookings</h3>
        <p className="text-2xl">{todayCount}</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Low Stock Products</h3>
        <p className="text-2xl">{lowStock}</p>
      </Card>
    </div>
  );
};

export default Overview;
