import axiosInstance from "./axios.js";


export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data
  } catch (error) {
    throw error
  }
}

export const getProfile = async ()=> {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data
  } catch (error) {
    return null
  }
}

export const logOut = async ()=> {
  try {
    const response = await axiosInstance.post("/auth/log-out");
    return response.data;
  } catch (error) {
    return null
  }
}