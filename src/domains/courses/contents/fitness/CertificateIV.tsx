import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIV() {
  return (
    <div className={paragraphStyle}>
      Studying Certificate III in Fitness is a great way to start your journey
      as a fitness instructor. You’ll learn how to plan and deliver group
      exercise classes and design gym-based programs for individuals who don’t
      need ongoing monitoring. You’ll be working in predictable environments,
      under general supervision, and using your judgement to handle routine
      matters, all while following clear policies and procedures.
      <br />
      <br />
      This qualification opens the door to a career as a fitness instructor in
      settings such as gyms, fitness centres, leisure centres, or community
      hubs. The skills you’ll develop will be in line with Australian standards
      and regulations, ensuring you’re prepared to meet both Commonwealth and
      State requirements.
      <div className="my-10">
        <h3 className={titleStyle}>Delivery mode</h3>
        <span>Face to Face</span>
      </div>
      <div className="my-10">
        <h3 className={titleStyle}>Delivery site:</h3>
        <p className={titleStyle}>• Classroom</p>
        <span>242 Castlereagh Street Sydney NSW 2000 Australia</span>
        <p className={titleStyle}>• Practical</p>
        <span>Private Gymnasium for practical training and assessment</span>
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
