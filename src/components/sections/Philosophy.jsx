import philosophyData from "../../data/philosophyData";
import { motion } from "framer-motion";

function Philosophy() {
  return (
    <section id="philosophy" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="tracking-[0.35em] uppercase text-cyan-400">
            PERSONAL VALUES
          </p>

          <h2 className="mt-4 text-5xl font-bold">{philosophyData.title}</h2>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
        >
          <p className="tracking-[0.3em] uppercase text-cyan-400">
            {philosophyData.subtitle}
          </p>

          <h3 className="mt-5 text-3xl font-bold text-white">
            「{philosophyData.japanese}」
          </h3>

          <p className="mt-3 italic text-gray-400">{philosophyData.hiragana}</p>

          <p className="mt-3 italic text-gray-400">{philosophyData.romaji}</p>

          <p className="mt-2 text-lg italic text-cyan-300">
            {philosophyData.english}
          </p>

          <div className="my-8 h-px bg-white/10" />

          <p className="leading-8 text-gray-300">
            {philosophyData.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {philosophyData.values.map((item) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  borderColor: "#22d3ee",
                }}
                key={item}
                className="rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-center font-medium text-cyan-300 transition"
              >
                ✓ {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Philosophy;
