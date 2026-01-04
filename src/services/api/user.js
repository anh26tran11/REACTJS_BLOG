import api from "./index";
export const getUsers = async () => {
  return await api.get("/users");
};
export const getUserById = async (id) => {
  return await api.get(`/user/${id}`);
};

// Delete user by ID
export const deleteUser = async (id) => {
  return await api.delete(`/users/${id}`);
};
export const changeUserRole = async (id, role) => {
  return await api.put(`/users/${id}/role`, { role });
};
