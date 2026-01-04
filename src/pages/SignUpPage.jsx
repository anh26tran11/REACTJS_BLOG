import React from "react";
import AuthLayout from "../components/layout/AuthLayout";
import SignUpForm from "../components/features/auth/SignUpForm";
import toast from "react-hot-toast";
import { signUp } from "@/services/api/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleSignUp = async (formData) => {
    const { email, username, password } = formData;

    if (!username) {
      toast.error("Vui lòng nhập username!");
      return;
    }

    if (!email) {
      toast.error("Vui lòng nhập email!");
      return;
    }

    if (!password) {
      toast.error("Vui lòng nhập mật khẩu!");
      return;
    }
    try {
      await signUp({ email, username, password });
      toast.success("Đăng ký thành công!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message || "Đăng ký thất bại!");
    }
  };

  return (
    <AuthLayout>
      <SignUpForm onSuccess={handleSignUp} />
    </AuthLayout>
  );
};

export default SignUpPage;
