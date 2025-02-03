import { useExperienceStore } from "@/stores/store"
import Experience from "@/components/Experience";

export function ExperienceList() {
  const experience = useExperienceStore();

  return (
    <div>
      {experience.entries.length > 0 &&
        <h2 className='font-bold border-b-1 text-base'>Experience</h2>
      }
      <div className="ms-4 me-2">
        {experience.entries.map((entry, i) => (
          <Experience
            key={i}
            company={entry.company}
            position={entry.position}
            startDate={entry.startDate}
            endDate={entry.endDate || "Present"}
            points={entry.points}
          />
        ))}
      </div>
    </div >
  )
}