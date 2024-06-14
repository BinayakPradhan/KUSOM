import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Logout() {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
}
