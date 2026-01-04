import React, { useEffect, useState } from "react";
import MyPosts from "../components/MyPost";
import { deletePost, GetAllPost } from "@/services/api/blog";
import ConfirmDelete from "@/components/ConfirmDelete";

const MyPostPage = () => {
  const handleOpenDialogDelete = (post) => {
    setDeletingPost(post);
    setOpenDelete(true);
  };
  const [deletingPost, setDeletingPost] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const handleConfirmDelete = async (id) => {
    try {
      setLoading(true);
      await deletePost(id);
      setDeletingPost(null);
      setOpenDelete(false);
      fetchPost();
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPost = async () => {
    try {
      const response = await GetAllPost();
      const allPosts = response.data.items || [];
      setAllPosts(allPosts);

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        setPost([]);
        return;
      }

      const authorID = user.id;
      const userPosts = allPosts.filter((post) => post.authorID === authorID);
      console.log("userPosts", userPosts);

      setPost(userPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPost([]);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <MyPosts
        handleOpenDialogDelete={handleOpenDialogDelete}
        posts={posts}
        allPosts={allPosts}
      />
      <ConfirmDelete
        // open={openDelete}
        // onOpenChange={setOpenDelete}
        open={openDelete}
        onOpenChange={setOpenDelete}
        handleConfirmDelete={handleConfirmDelete}
        deletingUser={deletingPost}
        loading={loading}
        deletingPost={deletingPost}
      />
    </div>
  );
};

export default MyPostPage;
