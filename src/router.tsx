import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import { Auth } from "./routes/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import TestComponents from "./routes/TestComponents";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner";
import SelectServer from "./routes/SelectServer";
import Dashboard2 from "./routes/Dashboard2";

const Layout = React.lazy(() => import("./routes/Layout"))

export const router = createBrowserRouter([
    {
        path: "/",
        element:  <Suspense fallback={<Spinner />}>
            <Layout />
        </Suspense>,
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
                        element: <Dashboard />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "select-server",
                        element: <SelectServer/>
                    }
                ]
            },
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/test-components",
        element: <TestComponents />
    }
])