import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function KitchenManagement() {
  return (
    <div className={paragraphStyle}>
      Supersedes and is equivalent to SIT40516 – Certificate IV in Commercial
      Cookery 09/Jun/2022.
      <br />
      <br />
      This qualification reflects the role of chefs and cooks who have a
      supervisory or team leading role in the kitchen. They operate
      independently or with limited guidance from others and use discretion to
      solve non-routine problems.
      <br />
      <br />
      This qualification provides a pathway to work in organisations such as
      restaurants, hotels, clubs, pubs, cafes and coffee shops, or to run a
      small business in these sectors.
      <br />
      <br />
      The skills in this qualification must be applied in accordance with
      Commonwealth and State or Territory legislation, Australian standards and
      industry codes of practice.
      <br />
      <br />
      No occupational licensing, certification or specific legislative
      requirements apply to this qualification at the time of publication.
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

export default KitchenManagement;
