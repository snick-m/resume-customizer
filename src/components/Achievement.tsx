import React from 'react';
import { AchievementEntry } from '@/stores/store';


const Achievement: React.FC<AchievementEntry> = ({ title, event, points }) => {
  return (
    <div className=''>
      <div className="grid grid-flow-col content-between mt-2">
        <div className="font-bold text-sm">{event}</div>
        {/* <div className="date justify-self-end">{startDate} - {endDate}</div> */}
      </div>
      <div className="text-xs italic" >{title}</div>
      <ul className='mt-1'>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievement;