'use client';

import Button from '@/components/common/Button';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { subscribe } from '../services/subscribe';
import { toast } from 'react-toastify';

function SubscriptionContainer() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) return;
    const { error } = await subscribe(email);
    if (error === 'duplicate') {
      toast.error(
        t('duplicate', { defaultValue: 'This email is already subscribed.' })
      );
    } else if (error) {
      toast.error(error || t('error', { defaultValue: 'An error occurred.' }));
    } else {
      setEmail('');
      toast.success(t('success', { defaultValue: 'Subscription successful.' }));
    }
  };

  return (
    <div className="bg-black text-white font-[family-name:var(--font-montserrat)] md:m-60 flex flex-col items-center justify-center p-10 md:p-40 pt-20 md:pt-10">
      <h2 className="text-3xl md:text-5xl font-bold">{t('title')}</h2>
      <p className="text-neutral-300 pt-10">{t('desc')}</p>
      <div className="flex flex-col md:flex-row mt-40">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          className="w-full md:w-500 p-10 border border-neutral-300 text-black bg-white placeholder:text-neutral-500"
        />
        <Button
          className="w-full md:w-2/3 p-10 border text-white"
          onClick={handleSubscribe}
        >
          {t('button')}
        </Button>
      </div>
    </div>
  );
}

export default SubscriptionContainer;
