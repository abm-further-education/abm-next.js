import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIVPM() {
  return (
    <div className={paragraphStyle}>
      This qualification reflects the role of individuals who apply project
      management skills and knowledge in a wide variety of contexts. The job
      roles that relate to this qualification may include Contracts Officer,
      Project Administrator and Quality Officer.
      <br />
      <br />
      Individuals in these roles work autonomously, and might be members of a
      project team, with no direct responsibility for overall project outcomes.
      Primarily, these roles would support wider project operations. They may
      use project tools and methodologies selectively to support organisational
      or business activities.
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

export default CertificateIVPM;
