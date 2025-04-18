export default function PostCard({ post }) {
  const randomImageId = Math.floor(Math.random() * 100);
  return (
    <div className="p-4 border rounded shadow bg-white flex space-x-4">
      <img
        src={`https://picsum.photos/seed/${randomImageId}/100`}
        className="w-24 h-24 object-cover rounded"
      />
      <div>
        <p className="font-bold">Post #{post.id}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
