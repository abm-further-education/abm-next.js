import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIV() {
  return (
    <div className={paragraphStyle}>
      The SIS40221 Certificate IV in Fitness is perfect for anyone looking to
      become a personal trainer. You’ll learn how to design, instruct, and
      assess exercise programmes for healthy clients aiming to achieve their
      fitness goals. If a client has more serious health concerns, you’ll refer
      them to medical professionals. Personal trainers work independently, using
      their fitness knowledge in both routine and unpredictable situations, and
      communicate well with clients and health experts to achieve the best
      results.
      <br />
      <br />
      This course offers a pathway to work as a personal trainer in gyms,
      fitness centres, leisure facilities, client workplaces, homes, and even
      outdoors. You can train individuals or groups and may also provide online
      services. You could also step into leadership roles in some settings.
      <br />
      <br />
      The target group for this qualification includes international students
      who: – Want to start or advance their career in the fitness industry. –
      Want to switch to a new field. – Have completed a Certificate III in
      Fitness and wish to develop further skills. – Are looking for a pathway to
      higher qualifications in fitness.
      <br />
      <br />
      Our students come from a range of countries. Some may be new to Australia,
      while others may have lived here before, either recently or in the past.
      This qualification is your stepping stone into the fitness industry, with
      no special licensing or certification required. You’ll follow Australian
      standards and industry practices to ensure you’re well-prepared for your
      career.
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

export default CertificateIV;
