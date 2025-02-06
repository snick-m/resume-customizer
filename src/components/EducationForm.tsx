import { useEducationStore } from "@/stores/store";
import { ChangeEvent, useState } from "react";


export default function EducationForm() {
  const educationInfo = useEducationStore();
  const [educationEntries, setEducation] = useState(educationInfo.entries.reduce((acc, entry) => {
    return acc + `${entry.degree}, ${entry.fieldOfStudy}, ${entry.school}, ${entry.startDate}, ${entry.endDate}\n`
  }, ""));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setEducation(event.target.value);

    // Process value
    const entries = event.target.value.split("\n").filter((entry) => entry !== "");
    educationInfo.clearEntries();
    entries.map((entry) => {
      const [degree, fieldOfStudy, school, startDate, endDate] = entry.split(", ");
      educationInfo.addEntry({
        degree,
        fieldOfStudy,
        school,
        startDate,
        endDate: endDate ?? undefined
      });
    });
  }

  return (
    <div className="grid grid-flow-row justify-items-stretch content-start w-full gap-4">
      <label htmlFor="education" className="row-start-1 text-center">Education</label>
      <textarea className="p-2 rounded-lg row-start-2 bg-zinc-900 scrollbar scrollbar-thumb-zinc-900 scrollbar-track-rounded-full scrollbar-track-zinc-800"
        rows={8}
        value={educationEntries}
        name="education"
        placeholder="Education entries in the format: Degree, Field of Study, School, Start Date, End Date"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}