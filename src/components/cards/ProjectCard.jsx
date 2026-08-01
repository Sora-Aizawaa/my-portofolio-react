import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ProjectCard({ project }) {
  return (
    <Card>
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 text-gray-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Button href={project.github}>GitHub</Button>

          <Button variant="outline" href={project.demo}>
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
