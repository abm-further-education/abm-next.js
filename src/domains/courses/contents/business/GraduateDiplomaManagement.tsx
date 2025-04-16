import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function GraduateDiplomaManagement() {
  return (
    <div className={paragraphStyle}>
      Our Graduate Diploma of Management (Learning) course at ABM is structured
      to allow you to maximise your knowledge in your chosen field of specialty.
      Our Graduate Diploma of Management (Learning) reflects the role of
      individuals who apply highly specialised knowledge and skills in the field
      of organisational learning and capability development. When you
      successfully initiate, design and execute major learning and developmental
      functions with an organisation. Individuals in this field of work tend to
      have full responsibility and accountability for the personal output and
      work of others, and as a result, strong leadership qualities are crucial.
      <br />
      <br />
      Individuals looking to pursue a career centered around the management and
      leadership of others will benefit highly from the resources offered at
      ABM. As a result, upon the completion of this course, individuals will be
      able to apply critical thinking to solve complex problems, lead strategic
      transformation and lead innovating thinking and practice – Enabling
      students to be better suited to their field.
      <div className="my-10">
        <h3 className={titleStyle}>Delivery mode</h3>
        <span>Face to Face</span>
      </div>
      <div className="my-10">
        <h3 className={titleStyle}>Delivery site:</h3>
        <p className={titleStyle}>• Classroom</p>
        <span>
          Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000
        </span>
        <p className={titleStyle}>• Kitchen</p>
        <span>242 Castlereagh Street Sydney NSW 2000 Australia</span>
      </div>
      <div>
        <p>
          * More information is available via the{' '}
          <Link
            href="https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25"
            target="_blank"
            className="underline"
          >
            My Skills Website.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default GraduateDiplomaManagement;
