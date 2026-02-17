import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import LogoutButton from './LogoutButton';
import {
  Users,
  Newspaper,
  GraduationCap,
  MessageSquareQuote,
  CalendarDays,
  FileText,
  DollarSign,
  BookOpen,
  ArrowRight,
  Home,
} from 'lucide-react';

const menuItems = [
  {
    href: '/users',
    icon: Users,
    title: 'User List',
    description: 'View and manage user list',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    hoverColor: 'hover:border-blue-300',
    textColor: 'text-blue-600',
  },
  {
    href: '/admin/news',
    icon: Newspaper,
    title: 'News Management',
    description: 'Write and manage newsletters',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    hoverColor: 'hover:border-emerald-300',
    textColor: 'text-emerald-600',
  },
  {
    href: '/admin/courses',
    icon: GraduationCap,
    title: 'Course Management',
    description: 'Manage courses, translations, details & short courses',
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    hoverColor: 'hover:border-violet-300',
    textColor: 'text-violet-600',
  },
  {
    href: '/admin/testimonials',
    icon: MessageSquareQuote,
    title: 'Testimonials Management',
    description: 'Manage testimonials',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    hoverColor: 'hover:border-amber-300',
    textColor: 'text-amber-600',
  },
  {
    href: '/admin/academic-calendar',
    icon: CalendarDays,
    title: 'Academic Calendar',
    description: 'Manage term dates and holidays',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50',
    hoverColor: 'hover:border-rose-300',
    textColor: 'text-rose-600',
  },
  {
    href: '/admin/policies',
    icon: FileText,
    title: 'Policies & Procedures',
    description: 'Manage policy documents and forms',
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-50',
    hoverColor: 'hover:border-cyan-300',
    textColor: 'text-cyan-600',
  },
  {
    href: '/admin/fee-schedule',
    icon: DollarSign,
    title: 'Fee Schedule',
    description: 'Manage fee schedules, pricing and payment info',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    hoverColor: 'hover:border-orange-300',
    textColor: 'text-orange-600',
  },
  {
    href: '/admin/entry-requirements',
    icon: BookOpen,
    title: 'Entry Requirements',
    description: 'Manage course entry requirements and ELICOS partners',
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50',
    hoverColor: 'hover:border-teal-300',
    textColor: 'text-teal-600',
  },
];

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto">
          {/* Header */}
          <div className="p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  Admin Dashboard
                </h1>
                <p className="text-gray-500 text-sm">
                  Welcome, {session.user.email}
                </p>
              </div>
              <div className="flex gap-10 items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all text-sm font-medium"
                >
                  <Home className="w-16 h-16" />
                  Back to Website
                </Link>
                <LogoutButton />
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 px-1">
              Management Menu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex flex-col p-5 bg-white rounded-xl border-2 border-gray-100 ${item.hoverColor} hover:shadow-md transition-all duration-200`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-24 h-24 ${item.color} rounded-lg flex items-center justify-center shadow-sm`}
                      >
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-5 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className={`w-4 h-4 ${item.textColor}`} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
