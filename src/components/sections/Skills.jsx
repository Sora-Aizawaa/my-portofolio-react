import skillsData from "../../data/skillsData";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";

function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="My Skills" subtitle="What I Know" />

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {skillsData.map((skill) => (
            <div key={skill.id}>
              <div className="mb-2 flex justify-between">
                <h3 className="font-semibold">{skill.name}</h3>

                <span className="text-cyan-400">{skill.level}%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default Skills;
