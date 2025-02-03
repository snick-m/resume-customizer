import { useEducationStore } from "@/stores/store"
import Education from "@/components/Education";

export function EducationList() {
  const education = useEducationStore();

  return (
    <div>
      {education.entries.length > 0 &&
        <h2 className='font-bold border-b-1 text-base mx-4'>Education</h2>
      }
      {education.entries.map((entry, i) => (
        <Education
          key={i}
          degree={entry.degree}
          fieldOfStudy={entry.fieldOfStudy}
          school={entry.school}
          startDate={entry.startDate}
          endDate={entry.endDate || "Present"}
        />
      ))}
    </div>
  )
}