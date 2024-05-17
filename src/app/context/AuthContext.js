'use client'
// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);

  const login = (data, username) => {
    console.log("cjsdcj",data,username,"authcontext")
    setToken(data);
    setName(username)
    // setName(data.fullName)
    // You can also store the token in localStorage or sessionStorage for persistence
  };
  const signup = (data, username) => {
    console.log("cjsdcj",data,"authcontext")
    setToken(data);
    setName(username)
    // setName(data.fullName)
    // You can also store the token in localStorage or sessionStorage for persistence
  };

  const logout = () => {
    setToken(null);
    setName(null)
    // Clear token from localStorage or sessionStorage
  };

  const isAuthenticated = () => {

    return (!!token);
  };

  return (
    <AuthContext.Provider value={{ token,name, login,signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
