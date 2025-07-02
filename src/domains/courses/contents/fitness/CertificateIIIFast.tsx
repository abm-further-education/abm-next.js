import React from 'react';
import { paragraphStyle, titleStyle } from '../../components/CourseDetail';
import Link from 'next/link';

function CertificateIIIFast() {
  return (
    <>
      <h2 className={titleStyle}>Start Your Career as a Fitness Instructor</h2>

      <div className={paragraphStyle}>
        The SIS30321 Certificate III & SIS40221 Certificate IV in Fitness is
        designed for those looking to become Group Exercise Instructors or Gym
        Instructors. This qualification equips you with the skills to plan and
        deliver group exercise sessions and create gym-based programmes for
        individuals, where personalised instruction and ongoing client
        monitoring are limited.
        <br />
        <br />
        You will work in structured and supervised environments, such as fitness
        centres, gyms, and community leisure facilities. As a fitness
        instructor, you will use discretion and judgement when delivering
        exercise sessions and interacting with clients, following established
        organisational policies and procedures.
        <br />
        <br />
        <p className={titleStyle}>Where Can This Qualification Take You? </p>
        <br />
        This course provides a direct pathway to employment in:
        <br />– Fitness Centres & Gyms <br />– Leisure & Community Centres
        <br />– Health & Wellness Clubs
        <br />
        <br />
        Our students come from a range of countries. Some may be new to
        Australia, while others may have lived here before, either recently or
        in the past. This qualification is your stepping stone into the fitness
        industry, with no special licensing or certification required. You’ll
        follow Australian standards and industry practices to ensure you’re
        well-prepared for your career.
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
    </>
  );
}

export default CertificateIIIFast;
