const { fetchData } = require("../services/apiClient");

exports.getPosts = async (req, res) => {
  const type = req.query.type;
  if (!["latest", "popular"].includes(type)) {
    return res
      .status(400)
      .json({ error: "Invalid type. Use latest or popular." });
  }

  try {
    const { users } = await fetchData("/users");
    const allPosts = [];
    const commentCounts = {};

    for (const userId of Object.keys(users)) {
      const { posts } = await fetchData(`/users/${userId}/posts`);

      for (const post of posts) {
        if (!post.id) continue;
        allPosts.push(post);

        const { comments } = await fetchData(`/posts/${post.id}/comments`);
        commentCounts[post.id] = comments?.length || 0;
      }
    }

    if (type === "popular") {
      const maxCount = Math.max(...Object.values(commentCounts));
      const popularPosts = allPosts.filter(
        (post) => commentCounts[post.id] === maxCount
      );
      return res.json({ posts: popularPosts });
    } else {
      const latestPosts = allPosts.sort((a, b) => b.id - a.id).slice(0, 5);
      return res.json({ posts: latestPosts });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
