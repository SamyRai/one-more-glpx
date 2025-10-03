import { useMemo } from 'react';
import { POSTS } from '@/data/posts';

export function usePosts() {
  const sorted = useMemo(() => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)), []);
  return sorted;
}