import { useExperienceStore } from "@/stores/store";
import { ChangeEvent, useState } from "react";


export default function ExperienceForm() {
  const experienceInfo = useExperienceStore();
  const [experienceEntries, setExperience] = useState(experienceInfo.entries.reduce((acc, entry) => {
    return acc + `${entry.company}, ${entry.position}, ${entry.startDate}, ${entry.endDate ?? ""}\n${entry.points.reduce((a, e) => a + e + "\n", "")}\n\n`
  }, ""));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setExperience(event.target.value);

    // Process value
    const entries = event.target.value.split("\n\n").filter((entry) => entry !== "");
    experienceInfo.clearEntries();
    entries.map((entry) => {
      const [company, position, startDate, endDate] = entry.split("\n")[0].split(", ");
      const points = entry.split("\n").slice(1);
      experienceInfo.addEntry({
        company,
        position,
        startDate,
        endDate: endDate ?? undefined,
        points,
      });
    });
  }

  return (
    <div className="grid grid-flow-row justify-items-stretch content-start w-full gap-4">
      <label htmlFor="experience" className="row-start-1 text-center">Experience</label>
      <textarea className="p-2 rounded-lg row-start-2 text-black"
        rows={8}
        value={experienceEntries}
        name="experience"
        placeholder="Experience entries in the format: Company, Position, Start Date, End Date, Points (separated by newlines)"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}