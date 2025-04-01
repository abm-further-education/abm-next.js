'use server';
import prisma from '@/lib/prisma';

export async function getUsers() {
  return prisma.user.findMany();
}

export async function createUser(name: string, email: string) {
  return prisma.user.create({
    data: { name, email },
  });
}
