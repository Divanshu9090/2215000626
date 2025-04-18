const { fetchData } = require("../services/apiClient");

exports.getAllUsers = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    const data = await fetchData("/users", token);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopUsers = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    console.log("Fetching users...");
    const userResponse = await fetchData("/users", token);
    console.log("Users fetched:", userResponse);

    const users = userResponse.users;
    const userCommentCount = {};
    const userIds = Object.keys(users);

    for (const userId of userIds) {
      console.log(`Fetching posts for user ${userId}`);
      const postsResponse = await fetchData(`/users/${userId}/posts`, token);
      const posts = postsResponse.posts || [];

      let commentCount = 0;

      for (const post of posts) {
        if (!post.id) continue;

        console.log(`Fetching comments for post ${post.id}`);
        const commentsResponse = await fetchData(
          `/posts/${post.id}/comments`,
          token
        );
        const comments = commentsResponse.comments || [];

        commentCount += comments.length;
      }

      userCommentCount[userId] = commentCount;
    }

    const topUsers = Object.entries(userCommentCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([userId, count]) => ({
        userId,
        name: users[userId],
        totalComments: count,
      }));

    res.json({ topUsers });
  } catch (err) {
    console.error("Error occurred:", err.message);
    res.status(500).json({ error: err.message });
  }
};
