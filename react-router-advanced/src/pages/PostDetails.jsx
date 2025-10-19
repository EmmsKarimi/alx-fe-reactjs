import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  return <h2>Viewing Post ID: {id}</h2>;
}
