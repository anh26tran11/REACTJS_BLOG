import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserManagement from "./pages/UserManagement";
import MyPosts from "./pages/MyPostPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CreateBlogPage from "./pages/CreateBlogPage";

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <h1 className="text-4xl font-bold text-indigo-600 mb-4">404</h1>
    <p className="text-gray-600">Không tìm thấy trang này.</p>
    <a href="/" className="mt-4 text-blue-600 hover:underline">
      Quay về trang chủ
    </a>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/blog-details/:id" element={<BlogDetailPage />} />
          <Route
            path="/user-management"
            element={
              <ProtectedRoute role="admin">
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route path="/my-posts" element={<MyPosts />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
