import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p
        className="
                mb-3
                font-semibold
                uppercase
                tracking-[6px]
                text-cyan-400
            "
      >
        {subtitle}
      </p>

      <h2
        className="
                text-5xl
                font-bold
            "
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;
