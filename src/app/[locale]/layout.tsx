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
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { GoogleReviewsBadge } from '@/components/common/GoogleReviewToast';
import AdminUserInfo from '@/components/admin/AdminUserInfo';

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWJGD6TJ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWJGD6TJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <TopButton />
          <main>{children}</main>
          <Footer />
          <GoogleReviewsBadge fixed align="left" width={260} />
          <AdminUserInfo />
        </NextIntlClientProvider>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <Script
          src="//code.tidio.co/cqb4wkv3i9cnjjekeyzeixzkodsmdhkb.js"
          async
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
