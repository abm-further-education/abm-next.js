import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/app/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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
  title: 'User Management - ABM Further Education',
  description:
    'Manage users and access control for ABM Further Education platform.',
};

export default async function UsersLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const resolvedParams = await params;
  // Check if locale is provided and valid
  if (
    resolvedParams.locale &&
    !routing.locales.includes(resolvedParams.locale as 'en' | 'kr' | 'sp')
  ) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-gray-50`}
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
          <div className="min-h-screen mt-140">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        User Management
                      </h1>
                      <p className="text-gray-600 mb-6">
                        Manage user accounts and access control for the ABM
                        platform.
                      </p>
                    </div>
                    <Link
                      href="/admin"
                      className="px-4 py-2 bg-primary-bk text-white rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-bk focus:ring-offset-2 transition-colors whitespace-nowrap"
                    >
                      ← Back to Admin Dashboard
                    </Link>
                  </div>
                </div>
                <main className="bg-white rounded-lg shadow-lg p-6">
                  {children}
                </main>
              </div>
            </div>
          </div>
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
