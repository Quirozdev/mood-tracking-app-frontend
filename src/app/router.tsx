import { createBrowserRouter } from "react-router";
import AppLayout from "@/app/layouts/AppLayout";
import { authRoutes } from "@/features/auth/routes";
import RequireAuth from "@/app/guards/RequireAuth";
import RequireOnboarding from "@/app/guards/RequireOnboarding";
import { HomePage } from "@/features/home/pages/HomePage";

export const router = createBrowserRouter([
  ...authRoutes,
  {
    element: <RequireAuth />,
    children: [
      {
        element: <RequireOnboarding />,
        children: [
          {
            element: <AppLayout />,
            children: [{ index: true, element: <HomePage /> }],
          },
        ],
      },
    ],
  },
]);
