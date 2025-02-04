import React from 'react';
import { AchievementEntry } from '@/stores/store';


const Achievement: React.FC<AchievementEntry> = ({ title, event, skills, points }) => {
  return (
    <div className=''>
      <div className="grid grid-flow-col content-between mt-2">
        <div className="font-bold text-sm">{event}
          {(skills?.length ?? 0 > 0) &&
            <>
              {' - '}
              <span className='italic font-normal text-xs'> {skills?.reduce((a, s, i) => a + (i === 0 ? '' : ', ') + s, '')}</span>
            </>
          }
        </div>
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