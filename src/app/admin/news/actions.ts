'use server';

import { createNews, updateNews, deleteNews } from '@/lib/news-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createNewsAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as string;
  const category = formData.get('category') as string;
  const date = formData.get('date') as string;
  const link = formData.get('link') as string;
  const published = formData.get('published') === 'true';

  if (!title || !description || !image || !category || !date) {
    throw new Error('Required fields are missing.');
  }

  try {
    const news = await createNews({
      title,
      description,
      content: content || null,
      image,
      category,
      date,
      link: link || null,
      published,
      created_by: session.user.id,
    });

    return { success: true, news };
  } catch (error) {
    console.error('Create news error:', error);
    throw error;
  }
}

export async function updateNewsAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as string;
  const category = formData.get('category') as string;
  const date = formData.get('date') as string;
  const link = formData.get('link') as string;
  const published = formData.get('published') === 'true';

  try {
    const news = await updateNews(id, {
      title,
      description,
      content: content || null,
      image,
      category,
      date,
      link: link || null,
      published,
    });

    return { success: true, news };
  } catch (error) {
    console.error('Update news error:', error);
    throw error;
  }
}

export async function deleteNewsAction(id: string) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await deleteNews(id);
    return { success: true };
  } catch (error) {
    console.error('Delete news error:', error);
    throw error;
  }
}

export async function migrateNewsAction(newsData: Array<{
  title: string;
  description: string;
  content?: string;
  image: string;
  category: string;
  date: string;
  link?: string;
}>) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    for (const news of newsData) {
      await createNews({
        title: news.title,
        description: news.description,
        content: news.content || null,
        image: news.image,
        category: news.category,
        date: news.date,
        link: news.link || null,
        published: true,
        created_by: session.user.id,
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Migrate news error:', error);
    throw error;
  }
}

