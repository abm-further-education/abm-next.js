import { getUsers, createUser } from './actions';
import { redirect } from 'next/navigation';
import type { User } from '@/lib/supabase';
import { getAdminSession } from '@/lib/auth';

export default async function UsersPage() {
  // 어드민 권한 확인
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }
  let users: User[];
  let error: string | undefined;

  try {
    users = await getUsers();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load users';
    users = [];
  }

  async function handleCreateUser(formData: FormData) {
    'use server';

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if (!name || !email) {
      throw new Error('Name and email are required');
    }

    try {
      await createUser(name, email);
      redirect('/users'); // Refresh the page to show the new user
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  }

  return (
    <main>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <p>Error: {error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">User List</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded"
              >
                <div>
                  <span className="font-medium">{user.name}</span>
                  <span className="text-gray-600 ml-2">({user.email})</span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>
        <form action={handleCreateUser} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter user email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add User
          </button>
        </form>
      </div>
    </main>
  );
}
