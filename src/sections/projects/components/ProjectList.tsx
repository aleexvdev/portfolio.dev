import { projects } from "../data/data"
import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="grid p-0 grid-cols-1 h-full w-full gap-y-6">
      {
        projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))
      }
    </div>
  );
}
