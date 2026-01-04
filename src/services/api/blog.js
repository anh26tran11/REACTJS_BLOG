import { data } from "react-router-dom";
import api from "./index";

export const getBlog = async (data) => {
  return await api.get("/posts", data);
};
export const getBlogById = async (id) => {
  return await api.get(`/posts/${id}`);
};
export const createBlog = async (data) => {
  return await api.post("/posts", data);
};
export const updateBlog = async (id, data) => {
  return await api.put(`/posts/${id}`, data);
};
export const deletePost = async (id) => {
  return await api.delete(`/posts/${id}`);
};
export const getBlogsByAuthor = async (authorID) => {
  return await api.get(`/posts/author/${authorID}`);
};
export const GetAllPost = async (data) => {
  return await api.get("/posts", data);
};
