// // src/router/AppRouter.tsx

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
// import Farm from "../pages/Farm";
import FarmPage from "@/pages/Farm";
import FarmDetail from "@/pages/Farm/Detail";
import HatcheryPage from "@/pages/Hatchery";
import HatcheryDetail from "@/pages/Hatchery/Detail";
import ProductionPage from "@/pages/Production";
import DiseasePage from "@/pages/Disease";
import VesselPage from "@/pages/Vessel";
import LicensePage from "@/pages/License";
import InspectionPage from "@/pages/Inspection";
import StationPage from "@/pages/Station";
import VMSPage from "@/pages/VMS";
import WaterQualityPage from "@/pages/WaterQuality";
import EnvironmentWarningPage from "@/pages/EnvironmentWarning";
import GisPage from "@/pages/Gis";

import ReportDashboardPage from "@/pages/Reports/Dashboard";
import ProductionReportPage from "@/pages/Reports/ProductionReport";
// import WaterQualityReportPage from "@/pages/Reports/WaterQualityReport";
// import EnvironmentWarningReportPage from "@/pages/Reports/EnvironmentWarningReport";
// import IUUReportPage from "@/pages/Reports/IUUReport";
// import ExportCenterPage from "@/pages/Reports/ExportCenter";

import NotFoundPage from "@/pages/NotFound";

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
      {
        path: "/hatchery",
        element: <HatcheryPage />,
        handle: {
          breadcrumb: "Cơ sở giống",
        },
      },
      {
        path: "/hatchery/:id",
        element: <HatcheryDetail />,
        handle: {
          breadcrumb: "Chi tiết cơ sở giống",
        },
      },
      {
        path: "/production",
        element: <ProductionPage />,
        handle: {
          breadcrumb: "Sản lượng",
        },
      },
      {
        path: "/disease",
        element: <DiseasePage />,
        handle: {
          breadcrumb: "Dịch bệnh",
        },
      },
      {
        path: "/vessel",
        element: <VesselPage />,
        handle: {
          breadcrumb: "Tàu cá",
        },
      },
      {
        path: "/license",
        element: <LicensePage />,
        handle: {
          breadcrumb: "Giấy phép",
        },
      },
      {
        path: "/inspection",
        element: <InspectionPage />,
        handle: {
          breadcrumb: "Đăng kiểm",
        },
      },
      {
        path: "/vms",
        element: <VMSPage />,
        handle: {
          breadcrumb: "VMS",
        },
      },
      {
        path: "/station",
        element: <StationPage />,
        handle: {
          breadcrumb: "Quan trắc môi trường",
        },
      },
      {
        path: "/water-quality",
        element: <WaterQualityPage />,
        handle: {
          breadcrumb: "Kết quả quan trắc",
        },
      },
      {
        path: "/environment-warning",
        element: <EnvironmentWarningPage />,
        handle: {
          breadcrumb: "Cảnh báo",
        },
      },
      {
        path: "/gis",
        element: <GisPage />,
        handle: {
          breadcrumb: "GIS",
        },
      },

      {
        path: "/reports-dashboard",
        element: <ReportDashboardPage />,
        handle: {
          breadcrumb: "Dashboard",
        },
      },

      {
        path: "/reports-production",
        element: <ProductionReportPage />,
        handle: {
          breadcrumb: "Báo cáo sản lượng",
        },
      },
      // {
      //   path: "/reports/water-quality",
      //   element: <WaterQualityReportPage />,
      //   handle: {
      //     breadcrumb: "Báo cáo chất lượng nước",
      //   },
      // },
      // {
      //   path: "/reports/environment-warning",
      //   element: <EnvironmentWarningReportPage />,
      //   handle: {
      //     breadcrumb: "Báo cáo cảnh báo",
      //   },
      // },
      // {
      //   path: "/reports/iuu",
      //   element: <IUUReportPage />,
      //   handle: {
      //     breadcrumb: "Báo cáo IUU",
      //   },
      // },
      // {
      //   path: "/reports/export-center",
      //   element: <ExportCenterPage />,
      //   handle: {
      //     breadcrumb: "Trung tâm xuất báo cáo",
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

