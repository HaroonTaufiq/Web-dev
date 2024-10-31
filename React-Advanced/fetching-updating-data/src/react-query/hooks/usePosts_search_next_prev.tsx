// for fetching data in next and previous page, and user query

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number,
  pagesize: number
}

// const postodos = ( userID : number | undefined) => {
  const postodos = ( query: PostQuery) => {

    return useQuery<Post[], Error>({
        // queryKey: userID ? ['users', userID ,'posts'] : ['posts'],
        queryKey: ['posts', query],
        queryFn: () => 
          axios
        .get('https://jsonplaceholder.typicode.com/posts',
          {params: {
            _start: (query.page - 1) * query.pagesize,
            _limit: query.pagesize
          }}
        )
        .then((res) => (res.data)),
        // keepPreviousData: true,
      })
    }

    export default postodos;