import { useAchievementStore } from "@/stores/store"
import Achievement from "@/components/Achievement";

export function AchievementList() {
  const achievement = useAchievementStore();

  return (
    <div>
      {achievement.entries.length > 0 &&
        <h2 className='font-bold border-b-1 text-base mx-4'>Achievement</h2>
      }
      {achievement.entries.map((entry, i) => (
        <Achievement
          key={i}
          title={entry.title}
          event={entry.event}
          skills={entry.skills}
          points={entry.points}
        />
      ))}
    </div>
  )
}