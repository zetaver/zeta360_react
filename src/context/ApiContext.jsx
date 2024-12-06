import React, { createContext, useState, useContext } from "react";

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  const saveAuthData = (token, role) => {
    setToken(token);
    setRole(role);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <ApiContext.Provider
      value={{ data, setData, token, role, saveAuthData, logout }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
