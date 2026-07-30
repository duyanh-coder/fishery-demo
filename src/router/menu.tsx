import {
  DashboardOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
  ShopOutlined,
  BarChartOutlined,
  BugOutlined,
  CarOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  RadarChartOutlined,
  EnvironmentFilled,
  AlertOutlined,
  GlobalOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },

  {
    key: "aquaculture",
    icon: <AppstoreOutlined />,
    label: "Quản lý thủy sản",
    children: [
      {
        key: "/farm",
        icon: <EnvironmentOutlined />,
        label: "Vùng nuôi",
      },
      {
        key: "/hatchery",
        icon: <ShopOutlined />,
        label: "Cơ sở giống",
      },
      {
        key: "/production",
        icon: <BarChartOutlined />,
        label: "Sản lượng",
      },
      {
        key: "/disease",
        icon: <BugOutlined />,
        label: "Dịch bệnh",
      },
    ],
  },

  {
    key: "fishing",
    icon: <CarOutlined />,
    label: "Khai thác thủy sản",
    children: [
      {
        key: "/vessel",
        icon: <RocketOutlined />,
        label: "Tàu cá",
      },
      {
        key: "/license",
        icon: <FileTextOutlined />,
        label: "Giấy phép",
      },
      {
        key: "/inspection",
        icon: <SafetyCertificateOutlined />,
        label: "Đăng kiểm",
      },
      {
        key: "/vms",
        icon: <RadarChartOutlined />,
        label: "VMS",
      },
    ],
  },

  {
    key: "monitoring",
    icon: <RadarChartOutlined />,
    label: "Quan trắc môi trường",
    children: [
      {
        key: "/station",
        icon: <EnvironmentFilled />,
        label: "Điểm quan trắc",
      },
      {
        key: "/water-quality",
        icon: <BarChartOutlined />,
        label: "Kết quả quan trắc",
      },
      {
        key: "/environment-warning",
        icon: <AlertOutlined />,
        label: "Cảnh báo",
      },
    ],
  },

  {
    key: "/gis",
    icon: <GlobalOutlined />,
    label: "GIS",
  },
  {
    key: "reports",
    icon: <RadarChartOutlined />,
    label: "Báo cáo",
    children: [
      {
        key: "/reports-dashboard",
        icon: <FileTextOutlined />,
        label: "Dashboard",
      },
      {
        key: "/reports-production",
        icon: <FileTextOutlined />,
        label: "Báo cáo sản lượng",
      },
    ],
  }
];
