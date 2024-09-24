import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import { Auth } from "./routes/Auth";
import Layout from "./routes/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "",
                        element: <Dashboard />,
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    }
])