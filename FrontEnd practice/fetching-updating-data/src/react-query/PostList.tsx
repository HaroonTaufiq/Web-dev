
// Infinite pagination, load more

import React from "react";
import postodos from "./hooks/usePosts";

const PostList = () => {
  const pagesize = 10;
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = postodos({ pagesize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="m-3">
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button 
        disabled={!hasNextPage || isFetchingNextPage} 
        className="btn btn-primary my-3 ms-4" 
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : hasNextPage ? 'Load More' : 'Nothing more to load'}
      </button>
    </div>
  );
};

export default PostList;
