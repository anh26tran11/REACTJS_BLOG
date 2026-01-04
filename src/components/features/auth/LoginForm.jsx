import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ handleLogin, email, password, setEmail, setPassword }) => {
  return (
    <div className="space-y-4 w-full">
      <input
        name="email"
        className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        name="password"
        className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => handleLogin()}
        type="submit"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 h-9 px-4 py-2 w-full text-white transition-colors"
      >
        Login
      </button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link className="text-indigo-600 hover:underline" to="/sign-up">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
