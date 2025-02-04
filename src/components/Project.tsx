import React from 'react';
import { ProjectEntry } from '@/stores/store';


const Project: React.FC<ProjectEntry> = ({ title, link, points, skills }) => {
  return (
    <div className=''>
      <div className="grid grid-flow-col content-between mt-2">
        <div className="font-bold text-sm">{title}
          {(skills?.length ?? 0 > 0) &&
            <>
              {' - '}
              <span className='italic font-normal text-xs'> {skills?.reduce((a, s, i) => a + (i === 0 ? '' : ', ') + s, '')}</span>
            </>
          }
        </div>
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