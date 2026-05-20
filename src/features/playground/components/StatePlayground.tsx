import { useState } from "react";

interface UserProfile {
  firstName: string;
  lastName: string;
  role: string;
}

const StatePlayground = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
  } as UserProfile);

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-gray-50" : "bg-gray-100 text-gray-900"}`}
    >
      <h1 className="text-4xl font-bold mb-4">State Playground</h1>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle
      </button>

      <div className="mt-8 p-6 border rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p><strong>Name:</strong>  {user.firstName} {user.lastName}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <input
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="mt-4 p-2 border rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default StatePlayground;
