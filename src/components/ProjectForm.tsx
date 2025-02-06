import { useProjectStore } from "@/stores/store";
import { ChangeEvent, useState } from "react";


export default function ProjectForm() {
  const projectInfo = useProjectStore();
  const [projectEntries, setProject] = useState(projectInfo.entries.reduce((acc, entry) => {
    console.log(entry);
    return acc + `${entry.title}, ${entry.link ?? ''}, ${entry.skills?.join(', ') ?? ''}\n${entry.points.join('\n')}\n\n`
  }, ""));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setProject(event.target.value);

    // Process value
    const entries = event.target.value.split('\n\n').filter((entry) => entry !== "");
    projectInfo.clearEntries();
    entries.map((entry) => {
      const [title, link, ...skills] = entry.split('\n')[0].split(', ');
      const points = entry.split('\n').slice(1);
      projectInfo.addEntry({
        title,
        link,
        skills,
        points,
      });
    });
  }

  return (
    <div className="grid grid-flow-row justify-items-stretch content-start w-full gap-4">
      <label htmlFor="project" className="row-start-1 text-center">Project</label>
      <textarea className="p-2 rounded-lg row-start-2 bg-zinc-900 scrollbar scrollbar-thumb-zinc-900 scrollbar-track-rounded-full scrollbar-track-zinc-800"
        rows={8}
        value={projectEntries}
        name="project"
        placeholder="Project entries in the format: Title, Link (optional), Points (separated by newlines)"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}
