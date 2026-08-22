import { AuthLayout } from "@/app/layouts/AuthLayout";
import { OnboardingPage } from "@/features/auth/pages/OnboardingPage";
import { SignInPage } from "@/features/auth/pages/SignInPage";
import { SignUpPage } from "@/features/auth/pages/SignUpPage";
import type { RouteObject } from "react-router";

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <SignInPage />,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
      },
    ],
  },
];
