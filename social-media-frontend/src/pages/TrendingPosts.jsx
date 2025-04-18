import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api";
import PostCard from "../components/PostCard";

export default function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Trending Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
