import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 px-4">
      <div className="text-center">
        {/* ABM Logo */}
        <div className="mb-30">
          <Image
            src="/abm_logo.png"
            alt="ABM Further Education"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-white mb-30 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-bk text-white font-semibold py-8 px-18  transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
