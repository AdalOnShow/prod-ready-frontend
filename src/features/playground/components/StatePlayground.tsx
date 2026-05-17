import { useState } from "react";

const StatePlayground = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-gray-50" : "bg-gray-100 text-gray-900"}`}
    >
      <h1 className="text-4xl font-bold mb-4">State Playground</h1>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle
      </button>
    </div>
  );
};

export default StatePlayground;
