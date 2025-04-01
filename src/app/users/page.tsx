import { getUsers, createUser } from './actions';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>

      <form
        action={async (formData) => {
          'use server';
          const name = formData.get('name') as string;
          const email = formData.get('email') as string;
          await createUser(name, email);
        }}
      >
        <input name="name" placeholder="Name" />
        <input name="email" type="email" placeholder="Email" />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}
