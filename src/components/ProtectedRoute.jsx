import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

export default function ProtectedRoute() {
  const {isAuthenticated, login, loading, user} = useContext(AuthContext);
  useEffect(() => {
    if (loading || !Cookies.get("at")) {
      if(!isAuthenticated) {
        login();
        return;
      }
    }
  }, [isAuthenticated])
  return <Outlet />
}
