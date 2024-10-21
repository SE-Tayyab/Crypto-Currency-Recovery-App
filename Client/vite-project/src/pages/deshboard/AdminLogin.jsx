import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual password check
    const correctPassword = "yourSecretPassword"; // Replace with your actual password logic
    if (password === correctPassword) {
      // Redirect to the dashboard on successful login
      navigate("/requests");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div
      style={{ minHeight: `calc(100vh - 135px)` }}
      className="flex items-center justify-center bg-gray-800 p-4"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-300 transition duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
