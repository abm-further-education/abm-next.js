import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function AdvancedDiplomaPM() {
  return (
    <div className={paragraphStyle}>
      This qualification reflects the role of individuals who apply project
      management skills and knowledge in a variety of contexts, across a number
      of industry sectors. The job roles that relate to this qualification may
      include Project Manager and Project Team Leader.
      <br />
      <br />
      Individuals in these roles have project leadership and management roles
      and are responsible for achieving project objectives. They possess a sound
      theoretical knowledge base and use a range of specialised, technical, and
      managerial competencies to initiate, plan, execute and evaluate their own
      work and/or the work of others.
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

export default AdvancedDiplomaPM;
