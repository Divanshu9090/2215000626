import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <Router>
      <div className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">Social Media Analytics</h1>
        <nav className="space-x-4">
          <Link to="/users">Top Users</Link>
          <Link to="/posts">Trending</Link>
          <Link to="/feed">Feed</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/users" element={<TopUsers />} />
        <Route path="/posts" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}
