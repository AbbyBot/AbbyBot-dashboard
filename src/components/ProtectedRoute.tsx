import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const {isAuthenticated, login, loading} = useContext(AuthContext);
  useEffect(() => {
    if (!loading) {
      if(!isAuthenticated) {
        login();
        return;
      }
    }
  }, [isAuthenticated])
  return <Outlet />
}
