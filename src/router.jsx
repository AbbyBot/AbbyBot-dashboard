import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Dashboard from "./routes/Dashboard/Dashboard";
import Welcome from "./routes/Dashboard/Welcome";
import ManageServers from "./routes/Dashboard/ManageServers/ManageServers";
import Logs from "./routes/Dashboard/Logs";
import Profile from "./routes/Dashboard/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { Auth } from "./routes/Auth";
import Test from "./routes/Test";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Dashboard />,
                        children: [
                            {
                                path: "",
                                element: <Welcome />
                            },
                            {
                                path: "manage-servers",
                                element: <ManageServers />
                            },
                            {
                                path: "logs",
                                element: <Logs />
                            },
                            {
                                path: "profile",
                                element: <Profile />
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/test",
        element: <Test />
    }
])