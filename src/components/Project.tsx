import React from 'react';
import { ProjectEntry } from '@/stores/store';


const Project: React.FC<ProjectEntry> = ({ title, link, points }) => {
  return (
    <div className=''>
      <div className="grid grid-flow-col content-between mt-2">
        <div className="font-bold text-sm">{title}</div>
        {/* <div className="date justify-self-end">{startDate} - {endDate}</div> */}
      </div>
      {link &&
        <a className="text-xs italic" href={link}>Code</a>
      }
      <ul className='mt-1'>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;