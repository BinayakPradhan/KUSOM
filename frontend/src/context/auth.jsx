/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [isLoggedIn, token]);

  // Tackling Logout
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT Authentication
  // const useAuthentication = async () => {
  //   try {
  //     const response = await fetch(`authentication link of user`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(`user data`, data);
  //       setUser(data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data");
  //   }
  // };
  // useEffect(function () {
  //   useAuthentication();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
