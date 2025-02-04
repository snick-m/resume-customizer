import { useProjectStore } from "@/stores/store"
import Project from "@/components/Project";

export function ProjectList() {
  const project = useProjectStore();

  return (
    <div>
      {project.entries.length > 0 &&
        <h2 className='font-bold border-b-1 text-base mx-4'>Project</h2>
      }
      {project.entries.map((entry, i) => (
        <Project
          key={i}
          title={entry.title}
          link={entry.link}
          points={entry.points}
        />
      ))}
    </div>
  )
}