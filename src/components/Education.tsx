import React from 'react';

interface EducationProps {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

const Education: React.FC<EducationProps> = ({ school, degree, fieldOfStudy, startDate, endDate }) => {
  return (
    <>
      <h2 className='font-bold'>Education</h2>
      <hr />
      <div className="flex justify-between mt-2">
        <div className="position">{school}</div>
        <div className="date">{startDate} - {endDate}</div>
      </div>
      <div className="company">{degree} in {fieldOfStudy}</div>
    </>
  );
};

export default Education;