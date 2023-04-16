import axios from "axios";

const target = "https://goal-setter-rest-api-backend.onrender.com";
const API_URL = target + "/api/users/";

//////Register user

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  await localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
