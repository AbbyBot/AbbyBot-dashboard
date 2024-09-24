import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getCookie } from "typescript-cookie";

export default function ProtectedRoute() {
  const {isAuthenticated, login, loading} = useContext(AuthContext);
  useEffect(() => {
    if (!loading || !getCookie("at")) {
      if(!isAuthenticated) {
        login();
        return;
      }
    }
  }, [isAuthenticated])
  return <Outlet />
}
