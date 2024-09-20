import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <div>Loggin in... please wait</div>
    }
])