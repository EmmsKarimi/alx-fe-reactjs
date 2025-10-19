// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // ✅ get dynamic id from URL

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post Page</h2>
      <p>You are viewing post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
