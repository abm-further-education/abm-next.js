'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { migrateNewsAction } from '../actions';
import type { NewsItem as OldNewsItem } from '@/lib/news';

interface MigrateNewsFormProps {
  newsData: OldNewsItem[];
}

export default function MigrateNewsForm({ newsData }: MigrateNewsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleMigrate() {
    setLoading(true);
    setError('');
    setSuccess(false);
    setProgress(0);

    try {
      // 날짜 형식 변환하여 서버 액션에 전달
      const formattedNews = newsData.map((news) => {
        const [day, month, year] = news.date.split('/');
        return {
          title: news.title,
          description: news.description,
          content: news.content,
          image: news.image,
          category: news.category,
          date: `${year}-${month}-${day}`,
          link: news.link,
        };
      });

      await migrateNewsAction(formattedNews);
      
      setProgress(100);
      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/news');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during migration.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded">
          Migration completed! Redirecting to news management page...
        </div>
      )}

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>News to migrate: {newsData.length} items</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto border border-gray-200 rounded p-4">
        <ul className="space-y-2">
          {newsData.map((news, index) => (
            <li key={index} className="text-sm text-gray-700">
              {index + 1}. {news.title}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleMigrate}
        disabled={loading || success}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Migrating...' : success ? 'Completed' : 'Start Migration'}
      </button>
    </div>
  );
}

