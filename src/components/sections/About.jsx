import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";

function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="About Me" subtitle="Who Am I" />

        <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-gray-400">
          {aboutData.description}
        </p>

        {/* <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {aboutData.quote.title}
          </p>

          <h3 className="mt-3 text-2xl font-medium text-white">
            {aboutData.quote.japanese}
          </h3>

          <p className="mt-2 italic text-gray-400">{aboutData.quote.english}</p>

          <p className="mt-4 leading-8 text-gray-300">
            {aboutData.quote.description}
          </p>
        </div> */}

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {aboutData.highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <h3 className="text-lg font-semibold text-cyan-400">✔ {item}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default About;
