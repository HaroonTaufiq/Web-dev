// for fetching data in next and previous page, and user query

import { useState } from "react"; 
import postodos from "./hooks/usePosts_search_next_prev";

const PostList = () => {
  // const [userID, setUserID] = useState<number>()
  const pagesize = 10;
  const [page, setpage] = useState<number>(1)

  const { data: posts, error, isLoading} = postodos({page, pagesize});
  // const { data: posts, error, isLoading} = postodos(userID);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
    {/* <select onChange={(e) => setUserID(parseInt(e.target.value))}
    value={userID}
    className="form-select m-3">
      <option value=""></option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select> */}

    <div className="m-3">
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button disabled={page == 1} className="btn btn-primary my-8" onClick={() => setpage(page - 1)}>Previous</button>
    <button className="btn btn-primary my-3 ms-4" onClick={() => setpage(page + 1)}>Next</button>
    </div>
    </>
  );
};

export default PostList;