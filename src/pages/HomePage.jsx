import React, { useEffect, useState } from "react";
import HeroSection from "../components/features/hero/HeroSection";
import BlogCard from "../components/features/blog/BlogCard";
import { getBlog } from "@/services/api/blog";

const BLOG_POSTS = [
  {
    id: "6932ea9755f58d0a8e9cfe59",
    title: "Bài viết đầu tiên",
    desc: "Nội dung bài viết...",
    tags: ["test", "demo"],
    image: "https://example.com/image.jpg",
  },
  {
    id: "691f0d6892db8d5937edc2ee",
    title: "Trung thu",
    desc: "Tết trung thu rước đèn đi chơi .........",
    tags: ["moon"],
    image:
      "https://res.cloudinary.com/dnjsdq6hr/image/upload/v1763642727/sut5qihdgndwk7pcq4d7.png",
  },
  {
    id: "68df5674ec9dd0ef3a77c652",
    title: "Enhancing your skills and capturing memorable moments",
    desc: "Enhancing Your Skills and Capturing Memorable Moments\nIn today's fast-paced world, personal growth a...",
    tags: ["Lifestyle"],
    image:
      "https://res.cloudinary.com/djgduskbu/image/upload/v1759467242/f5uv4fqzx1xgdqiujmgn.webp",
  },
  {
    id: "68df563dec9dd0ef3a77c62f",
    title: "Tips for getting the most out of apps and software",
    desc: "Tips for Getting the Most Out of Apps and Software\nWe use tons of apps daily—but most people only sc...",
    tags: ["Technology"],
    image:
      "https://res.cloudinary.com/djgduskbu/image/upload/v1759467186/u5q992v8opwi3ssbxa1e.webp",
  },
  {
    id: "68df5619ec9dd0ef3a77c626",
    title: "Learning new technology to boost your career in software",
    desc: "Learning New Tech to Boost Your Software Career\nIn tech, staying still means falling behind. Here's ...",
    tags: ["Technology"],
    image:
      "https://res.cloudinary.com/djgduskbu/image/upload/v1759467151/saukkypcfwsqfx7sskp8.webp",
  },
];

const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const handleGetBlogs = async () => {
    try {
      const res = await getBlog();
      if (res.status === 200) {
        setBlogPosts(res.data.items);
        console.log(res.data.items);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Lấy bài viết thất bại!");
    }
  };
  useEffect(() => {
    handleGetBlogs();
  }, []);
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <HeroSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post._id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
