import { useProjectStore } from "@/stores/store"
import Project from "@/components/Project";

export function ProjectList() {
  const project = useProjectStore();

  return (
    <div>
      {project.entries.length > 0 &&
        <h2 className='font-bold border-b-1 text-base'>Project</h2>
      }
      <div className="ms-4 me-2">
        {project.entries.map((entry, i) => (
          <Project
            key={i}
            title={entry.title}
            link={entry.link}
            points={entry.points}
          />
        ))}
      </div>
    </div>
  )
}