import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIII() {
  return (
    <div className={paragraphStyle}>
      Individuals well suited for our Advanced Diploma of Hospitality Management
      are those looking to pursue a career that will utilize a broad range of
      hospitality skills, combined with specialized managerial skills and
      substantial knowledge of industry to coordinate and monitor hospitality
      operations. Students in this field will operate with a high level of
      autonomy and will be responsible for the creation and implementation of
      strategic business management decisions.
      <br />
      <br />
      Our Advanced Diploma of Hospitality Management qualification provides
      students with a clear pathway to work in any hospitality industry sector
      and for a diverse range of employers including restaurants, hotels,
      motels, catering operations, clubs, pubs, cafes and coffee shops. Students
      completing this course will achieve the skills and framework required for
      multiskilling and for specialization in accommodation services, cookery,
      food and beverage gaming.
      <br />
      <br />
      Due to the nature of this course and the flexible electives available for
      students, we can ensure that you are working towards your goals in their
      chosen industry by allowing for specialized learning activities, catered
      towards your own preferences and career goals.
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

export default CertificateIII;
