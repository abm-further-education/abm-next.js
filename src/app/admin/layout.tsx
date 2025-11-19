import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/app/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Nav from '@/components/common/Nav';
import TopButton from '@/components/common/TopButton';
import Footer from '@/components/common/Footer';
import { Slide, ToastContainer } from 'react-toastify';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Admin Dashboard - ABM Further Education',
  description: 'Admin dashboard for managing ABM Further Education platform.',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Nav />
      <TopButton />
      <div
        className={`min-h-screen mt-140 ${inter.variable} ${montserrat.variable}`}
      >
        {children}
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Slide}
      />
    </NextIntlClientProvider>
  );
}
