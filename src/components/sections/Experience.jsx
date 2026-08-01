import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../timeline/TimelineItem";
import experienceData from "../../data/experienceData";
import Section from "../ui/Section";

function Experience() {
  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="Career Journey" />

      <div className="relative mx-auto max-w-5xl">
        {/* Garis Tengah */}

        <div
          className="
          absolute
          left-1/2
          top-0
          h-full
          w-1
          -translate-x-1/2
          rounded-full
          bg-cyan-400/30
        "
        />

        {experienceData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
