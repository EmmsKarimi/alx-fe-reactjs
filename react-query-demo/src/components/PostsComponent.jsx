import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    "posts",
    fetchPosts,
    {
      // ---- CACHING DEMO OPTIONS ----
      staleTime: 1000 * 60,             // 1 minute: data is fresh, no refetch
      cacheTime: 1000 * 60 * 5,         // 5 minutes: cached before garbage-collected
      refetchOnWindowFocus: false,      // don't refetch when tab focused
      keepPreviousData: true,           // keep old UI until new data arrives
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (React Query Caching Demo)</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
