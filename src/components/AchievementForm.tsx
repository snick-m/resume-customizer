import { useAchievementStore } from "@/stores/store";
import { ChangeEvent, useState } from "react";


export default function AchievementForm() {
  const achievementInfo = useAchievementStore();
  const [achievementEntries, setAchievement] = useState(achievementInfo.entries.reduce((acc, entry) => {
    return acc + `${entry.title}, ${entry.event}, ${entry.skills?.join(', ') ?? ''}\n${entry.points.join('\n')}\n\n`
  }, ""));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setAchievement(event.target.value);

    // Process value
    const entries = event.target.value.split("\n\n").filter((entry) => entry !== "");
    achievementInfo.clearEntries();
    entries.map((entry) => {
      const [title, event, ...skills] = entry.split("\n")[0].split(", ");
      const points = entry.split("\n").slice(1);
      achievementInfo.addEntry({
        title,
        event,
        skills,
        points,
      });
    });
  }

  return (
    <div className="grid grid-flow-row justify-items-stretch content-start w-full gap-4">
      <label htmlFor="achievement" className="row-start-1 text-center">Achievement</label>
      <textarea className="p-2 rounded-lg row-start-2 bg-zinc-900 scrollbar scrollbar-thumb-zinc-900 scrollbar-track-rounded-full scrollbar-track-zinc-800"
        rows={8}
        value={achievementEntries}
        name="achievement"
        placeholder="Achievement entries in the format: Title, Event, Points (separated by newlines)"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}

