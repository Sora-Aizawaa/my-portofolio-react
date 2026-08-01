import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import projectsData from "../../data/projectsData";
import Section from "../ui/Section";

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle title="Featured Projects" subtitle="My Portfolio" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}

export default Projects;
