import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])