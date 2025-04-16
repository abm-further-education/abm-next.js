import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function DiplomaHR() {
  return (
    <div className={paragraphStyle}>
      This qualification reflects the role of individuals working in a variety
      of roles within the human resources sector. The job roles that relate to
      this qualification may include Human Resources Consultant, Human Resources
      Advisor and Human Resources Business Partner. Responsibilities are likely
      to be determined at a workplace level. Some smaller organisations may
      require employees to work across all aspects of human resources. In larger
      organisations, individuals may coordinate a single human resources
      function.
      <div className="my-10">
        <h3 className={titleStyle}>Delivery mode</h3>
        <span>Face to Face</span>
      </div>
      <div className="my-10">
        <h3 className={titleStyle}>Delivery site:</h3>
        <span>
          Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000
        </span>
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

export default DiplomaHR;
