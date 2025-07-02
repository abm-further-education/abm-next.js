import React from 'react';
import { paragraphStyle } from '../../components/CourseDetail';
import CourseDeliveryInfo from '../../components/CourseDeliveryInfo';

function AdvancedDiplomaBusiness() {
  return (
    <div className={paragraphStyle}>
      Individuals who seek to improve upon their leadership capabilities, learn
      key problem-solving procedures and engage in a team environment should
      look no further than ABM’s Advanced Diploma of Business. Graduates in this
      course will leave with all the necessary tools required to tackle highly
      complex tasks in their specialised field of expertise. ABM’s Advanced
      Diploma of Business will provide students with the key building blocks
      required for you to specialise and enter the business environment in your
      chosen field.
      <br />
      <br />
      Throughout this course, students will engage in exercises aimed to assist
      in complex problem solving, develop and implement business plans, develop
      organisational strategies and contribute to strategic workforce planning –
      All Necessary skills to excel in your specialised field of work.
      <br />
      <br />
      Our Advanced Diploma of Business is suited towards individuals with a
      passion for leadership, strong problem-solving capabilities and the
      ability to motivate and guide a team.
      <CourseDeliveryInfo
        deliveryMode="Face to Face"
        deliverySites={[
          {
            type: 'Classroom',
            address: '242 Castlereagh Street Sydney NSW 2000 Australia',
          },
        ]}
        moreInfoLink={{
          url: 'https://www.yourcareer.gov.au/learn-and-train/courses/SIT40521?distanceFilter=25',
          text: 'My Skills Website.',
        }}
      />
    </div>
  );
}

export default AdvancedDiplomaBusiness;
