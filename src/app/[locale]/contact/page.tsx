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
            imgPath: '/contact.png',
            title: 'Contact Us',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <ContactForm />
    </div>
  );
}

export default page;
