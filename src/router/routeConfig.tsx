// src/router/routeConfig.ts

import DashboardPage from "@/pages/Dashboard";
import LoginPage from "@/pages/Login";

import { ROUTES } from "./routes";

export const routeConfig = [
  {
    path: ROUTES.LOGIN,

    element: <LoginPage />,

    layout: "auth",

    title: "Đăng nhập",
  },

  {
    path: ROUTES.ROOT,

    element: <DashboardPage />,

    layout: "main",

    title: "Dashboard",
  },
];