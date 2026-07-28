// // src/router/AppRouter.tsx

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
// import Farm from "../pages/Farm";
import FarmPage from "@/pages/Farm";
import FarmDetail from "@/pages/Farm/Detail";
import NotFoundPage from "@/pages/NotFound";
// import Ship from "../pages/Ship";
// import ShipPage from "../pages/Ship";
// import ShipDetail from "../pages/Ship/Detail";
// import SeedPage from "@/pages/Seed";
// import SeedDetail from "@/pages/Seed/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/farm",
        element: <FarmPage />,
        handle: {
          breadcrumb: "Vùng nuôi",
        },
      },
      {
        path: "/farm/:id",
        element: <FarmDetail />,
        handle: {
          breadcrumb: "Chi tiết vùng nuôi",
        },
      },
      // {
      //   path: "/ship",
      //   element: <ShipPage />,
      //   handle: {
      //     breadcrumb: "Tàu cá",
      //   },
      // },
      // {
      //   path: "/ship/:id",
      //   element: <ShipDetail />,
      //   handle: {
      //     breadcrumb: "Chi tiết tàu cá",
      //   },
      // },
      // {
      //   path: "/seed",
      //   element: <SeedPage />,
      //   handle: {
      //     breadcrumb: "Cơ sở giống",
      //   },
      // },
      // {
      //   path: "/seed/:id",
      //   element: <SeedDetail />,
      //   handle: {
      //     breadcrumb: "Chi tiết cơ sở giống",
      //   },
      // },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "@/layouts/MainLayout";

// import DashboardPage from "@/pages/Dashboard";

// import LoginPage from "@/pages/Login";

// import NotFoundPage from "@/pages/NotFound";

// import ProtectedRoute from "./ProtectedRoute";

// export default function AppRouter() {

//   return (

//     <BrowserRouter>

//       <Routes>

//         <Route

//           path="/login"

//           element={<LoginPage />}

//         />

//         <Route

//           path="/"

//           element={

//             <ProtectedRoute>

//               <MainLayout />

//             </ProtectedRoute>

//           }

//         >

//           <Route

//             index

//             element={<DashboardPage />}

//           />

//         </Route>

//         <Route

//           path="*"

//           element={<NotFoundPage />}

//         />

//       </Routes>

//     </BrowserRouter>

//   );

// }
