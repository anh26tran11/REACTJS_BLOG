import React, { use, useState, useEffect } from "react";
import BlogDetail from "../components/BlogDetail";
import { getBlogById } from "@/services/api/blog";
// Get id from url http://localhost:3000/blog-details/68df563dec9dd0ef3a77c62f
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  // State to store blog detail
  const [blogDetail, setBlogDetail] = useState(null);

  // Call API to get blog detail
  const fetchBlogDetail = async () => {
    try {
      const response = await getBlogById(id);
      console.log(response.data);
      setBlogDetail(response.data);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, []);

  return (
    <div>
      <BlogDetail id={id} blogDetail={blogDetail} />
    </div>
  );
};

export default BlogDetailPage;
