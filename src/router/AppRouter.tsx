// // src/router/AppRouter.tsx

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
// import Farm from "../pages/Farm";
import FarmPage from "@/pages/Farm";

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