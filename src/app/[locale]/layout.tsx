import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/app/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../../i18n/routing';
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
  title: 'ABM Further Education',
  description:
    'ABM Further Education provides accredited business, hospitality, and management courses to help students succeed in various industries.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'kr' | 'sp')) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
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
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <TopButton />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
      </body>
    </html>
  );
}
