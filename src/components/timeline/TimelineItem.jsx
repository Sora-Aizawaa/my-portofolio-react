import { motion } from "framer-motion";
import Card from "../ui/Card";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-10 flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div
        className="
    absolute
    left-1/2
    h-5
    w-5
    -translate-x-1/2
    rounded-full
    border-4
    border-[#080808]
    bg-cyan-400
  "
      />
      <Card className="w-full max-w-md p-6">
        <p className="text-cyan-400">{item.period}</p>

        <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

        <h4 className="mt-1 text-gray-300">{item.company}</h4>

        <p className="mt-4 text-gray-400">{item.description}</p>
      </Card>
    </motion.div>
  );
}

export default TimelineItem;
