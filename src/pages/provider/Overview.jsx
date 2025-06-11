// ✨ showtime: polished UI/animation overhaul
import React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import useDummy from "../../store/useDummy";
import Card from "../../components/Card";
import { useCountUp } from "react-use-count-up";
import PropTypes from "prop-types";

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
            <Counter value={item.value} />
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Counter = ({ value }) => {
  const endVal = Number(value ?? 0);
  const { value: animated } = useCountUp({ isCounting: true, end: endVal, duration: 1 });
  const num = Number(animated);
  const display = !Number.isNaN(num) ? num.toFixed(1) : 0;
  return <p className="text-2xl">{display}</p>;
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Overview;
