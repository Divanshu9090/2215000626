import { useEffect, useState } from "react";
import { fetchLatestPosts } from "../api";
import PostCard from "../components/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchLatestPosts();
      setPosts(data.posts);
    };

    load();

    const interval = setInterval(load, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Live Feed</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
