import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

// Function to get the token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("token"); // Assuming the token is stored in localStorage with the key 'token'
};

export const login = (data) => {
  return axios.post(`${API_BASE_URL}/auth/login`, data);
};

export const register = (data) => {
  return axios.post(`${API_BASE_URL}/auth/signup`, data);
};

export const fetchRoles = () => {
  return axios.get(`${API_BASE_URL}/roles`);
};

export const getProfile = () => {
  const token = getAuthToken();
  return axios.get(`${API_BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (profileData) => {
  const token = getAuthToken();
  return axios.put(`${API_BASE_URL}/profile`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
