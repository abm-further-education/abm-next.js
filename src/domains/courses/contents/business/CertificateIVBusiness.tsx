import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIVBusiness() {
  return (
    <div className={paragraphStyle}>
      Students participating in Certificate IV in Business will focus on
      building effective leadership and problem-solving capabilities crucial to
      success within a variety of business service job roles. Students pursuing
      a business-oriented career path will be armed with skills relating towards
      the completion of specialist and moderately complex administrative or
      operational tasks that will require advanced self-developmental skills.
      Upon the completion of Certificate IV in Business, you will be able to
      implement effective communication and problem-solving skills that will
      prove to be instrumental to their success within their chosen sector.
      Students will learn and implement a high level of skills and broad
      knowledge to apply solutions to a defined range of unpredictable
      complications and be able to concisely direct a team through any
      resolution proposed. Individuals with an aptitude for leadership and
      problem solving will be able to further their skills and learn key
      communication and problem-solving techniques to enable them to navigate a
      team through-out the many problems faced within the business environment.
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

export default CertificateIVBusiness;
