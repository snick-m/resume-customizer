import { useProjectStore } from "@/stores/store";
import { ChangeEvent, useState } from "react";


export default function ProjectForm() {
  const projectInfo = useProjectStore();
  const [projectEntries, setProject] = useState(projectInfo.entries.reduce((acc, entry) => {
    return acc + `${entry.title}, ${entry.link}\n${entry.points.reduce((a, e) => a + e + "\n", "")}\n\n`
  }, ""));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setProject(event.target.value);

    // Process value
    const entries = event.target.value.split("\n\n").filter((entry) => entry !== "");
    projectInfo.clearEntries();
    entries.map((entry) => {
      const [title, link] = entry.split("\n")[0].split(", ");
      const points = entry.split("\n").slice(1);
      projectInfo.addEntry({
        title,
        link,
        points,
      });
    });
  }

  return (
    <div className="grid grid-flow-row justify-items-stretch content-start w-full gap-4">
      <label htmlFor="project" className="row-start-1 text-center">Project</label>
      <textarea className="p-2 rounded-lg row-start-2 text-black"
        rows={8}
        value={projectEntries}
        name="project"
        placeholder="Project entries in the format: Title, Link (optional), Points (separated by newlines)"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}
