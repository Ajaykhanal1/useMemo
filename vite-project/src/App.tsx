import { useMemo, useState } from "react";

const users = [
  "Ajay",
  "Ram",
  "Sita",
  "Hari",
  "John",
  "Alice"
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        placeholder="Search user"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}