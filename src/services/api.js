import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const login = (data) => {
  return axios.post(`${API_BASE_URL}/auth/login`, data);
};

export const register = (data) => {
  return axios.post(`${API_BASE_URL}/auth/signup`, data);
};

export const fetchRoles = () => {
  return axios.get(`${API_BASE_URL}/roles`);
};
