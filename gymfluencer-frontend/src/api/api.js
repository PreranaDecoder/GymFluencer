import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your deployed backend URL in production

export const registerUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};
