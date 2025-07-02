import React from 'react';

export interface CourseDetailInfo {
  courseDuration: {
    title: string;
    description: string;
  };
  workPlacement: {
    title: string;
    hours: string;
  };
  studentSupport: {
    title: string;
    description: string[];
    supportTypes: string[];
    additionalInfo: string[];
  };
  jobRoles: {
    title: string;
    roles: string[];
  };
  pathways: {
    title: string;
    description: string;
    possibleJobTitles: string;
    roles: string[];
  };
  additionalInfo: {
    title: string;
    description: string;
  };
}

interface CourseDetailProps {
  courseInfo: CourseDetailInfo;
}

function CourseDetail({ courseInfo }: CourseDetailProps) {
  return (
    <div>
      <h3 className={titleStyle}>{courseInfo.courseDuration.title}</h3>
      <p className={paragraphStyle}>{courseInfo.courseDuration.description}</p>

      <h3 className={titleStyle}>{courseInfo.workPlacement.title}</h3>
      <p className={paragraphStyle}>{courseInfo.workPlacement.hours}</p>

      <h3 className={titleStyle}>{courseInfo.studentSupport.title}</h3>
      {courseInfo.studentSupport.description.map((desc, index) => (
        <p key={index} className={paragraphStyle}>
          {desc}
        </p>
      ))}

      {courseInfo.studentSupport.supportTypes.length > 0 && (
        <ul>
          {courseInfo.studentSupport.supportTypes.map((support, index) => (
            <li key={index} className={paragraphStyle}>
              • {support}
            </li>
          ))}
        </ul>
      )}

      {courseInfo.studentSupport.additionalInfo.map((info, index) => (
        <p key={index} className={paragraphStyle}>
          {info}
        </p>
      ))}

      <h3 className={titleStyle}>{courseInfo.jobRoles.title}</h3>
      <p className={paragraphStyle}>{courseInfo.jobRoles.roles.join(', ')}</p>

      <h3 className={titleStyle}>{courseInfo.pathways.title}</h3>
      <p className={paragraphStyle}>{courseInfo.pathways.description}</p>
      <p className={paragraphStyle}>{courseInfo.pathways.possibleJobTitles}</p>
      <p className={paragraphStyle}>{courseInfo.pathways.roles.join(', ')}</p>

      <h3 className={titleStyle}>{courseInfo.additionalInfo.title}</h3>
      <p className={paragraphStyle}>{courseInfo.additionalInfo.description}</p>
    </div>
  );
}

export default CourseDetail;

export const titleStyle =
  'text-lg font-semibold font-[family-name:var(--font-montserrat)] mt-20';

export const paragraphStyle = 'text-neutral-700 text-sm';
