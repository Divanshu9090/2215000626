const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
