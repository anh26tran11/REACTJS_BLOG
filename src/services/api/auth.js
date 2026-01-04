import api from "./index";

export const login = async (data) => {
  return await api.post("/auth/login", data);
};

export const signUp = async (data) => {
  return await api.post("/auth/register", data);
};

//get me
export const getMe = async () => {
  return await api.get("/auth/me");
};
