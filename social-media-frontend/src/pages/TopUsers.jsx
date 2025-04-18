import { useEffect, useState } from "react";
import { fetchTopUsers } from "../api";

export default function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then((data) => setUsers(data.topUsers));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Top 5 Users</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.userId} className="p-4 border rounded shadow bg-white">
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/150?img=${user.userId}`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm text-gray-500">
                  {user.totalComments} comments
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
