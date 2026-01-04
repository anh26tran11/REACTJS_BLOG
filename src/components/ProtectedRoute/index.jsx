import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role: requiredRole }) => {
  const user = JSON.parse(localStorage.getItem("user"))?.user;

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
