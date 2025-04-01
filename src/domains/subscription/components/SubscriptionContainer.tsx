import Button from '@/components/common/Button';
import React from 'react';

function SubscriptionContainer() {
  return (
    <div className="bg-black text-white font-[family-name:var(--font-montserrat)] md:m-60 flex flex-col items-center justify-center p-10 md:p-40">
      <h2 className="text-3xl md:text-5xl font-bold">Subscribe Newsletter</h2>
      <p className="text-neutral-300 pt-10">
        Subscribe now and never miss an update!
      </p>
      <div className="flex flex-col md:flex-row mt-40">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-500 p-10 border border-neutral-300 bg-white placeholder:text-neutral-700"
        />
        <Button className="w-full md:w-2/3 p-10 border text-white">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default SubscriptionContainer;
