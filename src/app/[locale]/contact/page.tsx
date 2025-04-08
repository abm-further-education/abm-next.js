import Banner from '@/components/common/Banner';
import ContactForm from '@/domains/contact/components/ContactForm';
import React from 'react';

function page() {
  return (
    <div>
      {' '}
      <Banner
        slides={[
          {
            imgPath: '/home/home.png',
            title: 'Contact Us',
            content: '',
          },
        ]}
      />
      <ContactForm />
    </div>
  );
}

export default page;
