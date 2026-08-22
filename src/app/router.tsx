import { createBrowserRouter } from "react-router";
import AppLayout from "@/app/layouts/AppLayout";
import App from "@/App";
import { authRoutes } from "@/features/auth/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <App /> }, ...authRoutes],
  },
]);
