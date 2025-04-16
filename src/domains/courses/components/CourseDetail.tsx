import React from 'react';

function CourseDetail() {
  return (
    <div>
      <h3 className={titleStyle}>Course Duration</h3>
      <p className={paragraphStyle}>
        This qualification will be delivered over 78 weeks, including 60 weeks
        of training and assessment spread over 6 terms of 10 weeks each.
      </p>

      <h3 className={titleStyle}>Work Placement</h3>
      <p className={paragraphStyle}>360 hours</p>

      <h3 className={titleStyle}>Student Support</h3>
      <p className={paragraphStyle}>
        To maximise the chance of students successfully completing their
        training, ABM will identify any support individual students need prior
        to their enrolment and provide access to that support throughout their
        training. This will be done using both the Enrolment Form, and a
        Pre-Enrolment Form, that students are required to fill in.
      </p>
      <p className={paragraphStyle}>
        The aim of both documents is to provide any support that may be
        required. This could include:
      </p>
      <ul>
        <li className={paragraphStyle}>
          • Language, Literacy and Numeracy (LLN) supports.
        </li>
        <li className={paragraphStyle}>• Assistive Technologys.</li>
        <li className={paragraphStyle}>• Additional Tutorials, and / ors.</li>
        <li className={paragraphStyle}>
          • Other mechanisms, such as assistance in using technology for online
          delivery components.
        </li>
      </ul>
      <p className={paragraphStyle}>
        Where this support attracts an additional cost to the student, ABM will
        make this clear prior to accepting the student’s enrolment. If there are
        limitations to the support ABM is able to provide, these limitations
        will be made clear in information provided to a potential student.
      </p>
      <p className={paragraphStyle}>
        Where ABM identifies required support, such as literacy or numeracy,
        English or other language barriers or physical capabilities, and it
        cannot provide such support directly, it will refer the student to a
        third party. The costs of such third-party support will the
        responsibility of the individual.
      </p>
      <p className={paragraphStyle}>
        Where ABM is not capable of offering an environment suitable for the
        needs of a student with specific identified needs, it will inform them
        accordingly and may direct the student to a provider that can, and thus
        will not process their enrolment.
      </p>

      <h3 className={titleStyle}>Job roles</h3>
      <p>Chef, Chef de partie</p>

      <h3 className={titleStyle}>
        Pathways to Further Study / Career Opportunities
      </h3>
      <p className={paragraphStyle}>
        After achieving this qualification, graduates may undertake the next
        qualification up the SIT50422 DIPLOMA OF HOSPITALITY MANAGEMENT
      </p>
      <p className={paragraphStyle}>Possible job titles include:</p>
      <p className={paragraphStyle}>Chef, Chef de partie</p>

      <h3 className={titleStyle}>Additional Information</h3>
      <p className={paragraphStyle}>
        Please read the Student Handbook prior to enrolment as this contains
        valuable information about ABM. For further information, please contact
        ABM by sending an email to info@abm.edu.au or call us on +61 (02) 9160
        4507.
      </p>
    </div>
  );
}

export default CourseDetail;

export const titleStyle =
  'text-lg font-semibold font-[family-name:var(--font-montserrat)] mt-20';

export const paragraphStyle = 'text-neutral-700 text-sm';
