import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface AdminBackButtonProps {
  /** Link to go back to (defaults to /admin) */
  href?: string;
  /** Label text (defaults to "Dashboard") */
  label?: string;
}

export default function AdminBackButton({
  href = '/admin',
  label = 'Dashboard',
}: AdminBackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
    >
      <ArrowLeft className="w-16 h-16" />
      {label}
    </Link>
  );
}
