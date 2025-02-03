import React from 'react';
import { ExperienceEntry } from '@/stores/store';


const Education: React.FC<ExperienceEntry> = ({ company, position, startDate, endDate, points }) => {
  return (
    <div className=''>
      <div className="grid grid-flow-col content-between mt-2">
        <div className="font-bold text-sm">{company}</div>
        <div className="date justify-self-end">{startDate} - {endDate}</div>
      </div>
      <div className="text-xs italic">{position}</div>
      <ul className='mt-1'>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;