import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function DiplomaHospitality() {
  return (
    <div className={paragraphStyle}>
      This qualification reflects the role of highly skilled senior operators
      who use a broad range of hospitality skills combined with managerial
      skills and sound knowledge of industry to coordinate hospitality
      operations. They operate independently, have responsibility for others and
      make a range of operational business decisions. This qualification
      provides a pathway to work in any hospitality industry sector as a
      departmental or small business manager. The diversity of employers
      includes restaurants, hotels, motels, catering operations, clubs, pubs,
      cafés, and coffee shops. This qualification allows for multiskilling and
      for specialisation in accommodation services, cookery, food and beverage
      and gaming. The skills in this qualification must be applied in accordance
      with Commonwealth and State/Territory legislation, Australian standards
      and industry codes of practice. No occupational licensing, certification
      or specific legislative requirements apply to this qualification at the
      time of publication
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

export default DiplomaHospitality;
