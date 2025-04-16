import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIVHR() {
  return (
    <div className={paragraphStyle}>
      Are you looking to work in a variety of human resources roles, such as a
      Human Resources Officer, Human Resources Coordinator, or Payroll Officer?
      The Certificate IV in Human Resource Management could be perfect for you.
      Would you like to take on responsibilities that may vary based on your
      workplace? In smaller organisations, you might work across all areas of
      human resources, while in larger ones, you could focus on a single
      function. Are you ready to take the next step in your HR career?
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

export default CertificateIVHR;
