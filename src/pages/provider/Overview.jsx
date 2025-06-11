// ✨ showtime: polished UI/animation overhaul
import React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import useDummy from "../../store/useDummy";
import Card from "../../components/Card";
import { useCountUp } from "react-use-count-up";

const Overview = () => {
  const appointments = useDummy((s) => s.appointments);
  const products = useDummy((s) => s.products);

  const total = appointments.length;
  const today = dayjs().format("YYYY-MM-DD");
  const todayCount = appointments.filter((a) => a.date === today).length;
  const lowStock = products.filter((p) => p.qty < 5).length;

  const items = [
    { label: "Total Bookings", value: total },
    { label: "Today's Bookings", value: todayCount },
    { label: "Low Stock Products", value: lowStock },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.map((item) => (
        <motion.div
          key={item.label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="drop-shadow-glow"
          whileHover={{ rotateX: 2, rotateY: 1 }}
        >
          <Card>
            <h3 className="text-lg font-semibold">{item.label}</h3>
            <Counter end={item.value} />
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Counter = ({ end }) => {
  const safeEnd = typeof end === "number" ? end : 0;
  const { value } = useCountUp({ isCounting: true, end: safeEnd, duration: 1 });
  return <p className="text-2xl">{Number(value || 0).toFixed(0)}</p>;
};

export default Overview;
