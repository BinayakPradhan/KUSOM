import { useAuth } from "../context/auth";
import { useEffect } from "react";
export default function Home() {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <>Home page</>;
}
