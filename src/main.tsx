import { createRoot } from "react-dom/client";
import "@/index.css";
import "./features/translations/i18n";
import { RouterProvider } from "react-router";
import { router } from "@/app/router";
import AppProviders from "@/app/providers/provider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </AppProviders>,
);
