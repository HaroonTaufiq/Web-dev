// Infinite pagination, load more

import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pagesize: number;
}

const postodos = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * query.pagesize,
          _limit: query.pagesize,
        },
      });
      return response.data;
    },
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default postodos;
