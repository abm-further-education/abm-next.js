import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function DiplomaBusiness() {
  return (
    <div className={paragraphStyle}>
      Upon the completion of our Diploma of Business, graduates will be able to
      fulfill a variety of roles applicable in most, to all business service
      jobs. Graduates will gain advanced frontline management accountabilities
      and knowledge, crucial towards their success within this industry.
      Individuals in these roles will have achieved a high degree of
      specialisation to carry out moderately complex tasks in their specialist
      field of expertise. Individuals with a Diploma of Business will utilize
      their specialised knowledge in their field to carry out business
      operations and resolve problems using their intuition and business
      knowledge.
      <br />
      <br />
      When you successfully complete your Diploma of Business at ABM, you will
      have the skills necessary to specialise in multiple niche areas within
      their industry, as well as further develop your skills over a wide variety
      of business functions, allowing the individual to gain both a broad and
      advanced insight into the business environment, allowing you to make
      calculated and informed decisions.
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

export default DiplomaBusiness;
