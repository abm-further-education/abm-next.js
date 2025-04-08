'use client';

import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type ContactFormData = {
  first_name: string;
  last_name: string;
  nationality: string;
  enquiry_type: string;
  email: string;
  phone: string;
  message: string;
};

function Contact() {
  const { watch, register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
  };

  return (
    <section className={cn('px-16 md:px-0 my-60 md:my-120')}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1000px] mx-auto">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold pb-50 font-[family-name:var(--font-montserrat)]">
            Get in touch with us
          </h2>
          <Link
            href="https://maps.app.goo.gl/X4hmXLeTjz6RQQn88"
            className="flex items-center gap-10"
            target="_blank"
          >
            <MapPin className="text-primary" />
            242 Castlereagh Street Sydney NSW 2000 Australia
          </Link>
          <div className="flex items-center gap-10 my-20">
            <Phone className="text-primary" />
            +61 (02) 9160 4507
          </div>
          <div className="flex items-center gap-10 my-20">
            <Smartphone className="text-primary" />
            (WhatsApp) + 61 482 796 010
          </div>
          <Link
            className="flex items-center gap-10"
            href="mailto:info@abm.edu.au"
            target="_blank"
          >
            <Mail className="text-primary" />
            info@abm.edu.au
          </Link>
        </div>

        <form
          className="flex flex-col w-full max-w-500 gap-15 mt-60 text-white font-[family-name:var(--font-montserrat)] md:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="enquiry_type" className="text-black">
            What is your Enquiry Type?
          </label>
          <select
            onChange={handleChange}
            id="select-packages"
            value={watch('enquiry_type')}
            className="w-full h-40 bg-darkBg border border-secondary text-primary text-sm focus:ring-secondary focus:border-secondary p-2.5"
          >
            <option value="">Select Enquiry Type</option>
            {options.map((option, index) => (
              <option key={index} value={option} className="bg-darkBg">
                {option}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-10 justify-between">
            <input
              type="text"
              placeholder="First Name"
              {...register('first_name')}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register('last_name')}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            {...register('phone')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />
          <input
            type="text"
            placeholder="Nationality"
            {...register('nationality')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />
          <textarea
            placeholder="Message"
            {...register('message')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />
          <Button className="mt-16 bg-black" type="submit">
            Send a Message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

const options = ['Book a Campus Tour', 'Become a Student', 'Become an Agent'];
