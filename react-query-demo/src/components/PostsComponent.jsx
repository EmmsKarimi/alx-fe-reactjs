import { useQuery } from "react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div>
      <button onClick={() => refetch()}>🔄 Refetch Posts</button>
      <ul style={{ marginTop: "20px" }}>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
