import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUpForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onSuccess) {
      onSuccess(formData);
    }
  };

  return (
    <>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
      />
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your username"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your password"
        type="password"
      />
      <button
        onClick={handleSubmit}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 h-9 px-4 py-2 w-full text-white transition-colors"
      >
        Sign Up
      </button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link className="text-indigo-600 hover:underline" to="/login">
            Login
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUpForm;
