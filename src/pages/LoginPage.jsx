import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/features/auth/LoginForm";
import { login, getMe } from "@/services/api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (formData) => {
    if (!email) {
      toast.error("Vui lòng nhập email!");
      return;
    }
    if (!password) {
      toast.error("Vui lòng nhập mật khẩu!");
      return;
    }
    try {
      const response = await login({ email, password });
      if (response && response.data) {
        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        toast.success("Đăng nhập thành công!");
        //Save to local storage
        localStorage.setItem("user", JSON.stringify(response.data));
        //Get me
        const meResponse = await getMe();
        if (meResponse && meResponse.data) {
          localStorage.setItem("user", JSON.stringify(meResponse.data));
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "Đăng nhập thất bại!");
    }
  };
  return (
    <AuthLayout>
      <LoginForm
        handleLogin={handleLogin}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </AuthLayout>
  );
};

export default LoginPage;
