'use server';
import { connectDB, User } from '@/lib/prisma';

export async function getUsers() {
  await connectDB();
  return User.find({}).lean();
}

export async function createUser(name: string, email: string) {
  await connectDB();
  return User.create({ name, email });
}
