import {
  DashboardOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
  CarOutlined,
  RadarChartOutlined,
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
        key: "/seed",
        label: "Cơ sở giống",
      },
      {
        key: "/production",
        label: "Sản lượng",
      },
      {
        key: "/disease",
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
        label: "Tàu cá",
      },
      {
        key: "/license",
        label: "Giấy phép",
      },
      {
        key: "/inspection",
        label: "Đăng kiểm",
      },
      {
        key: "/vms",
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
        label: "Điểm quan trắc",
      },
      {
        key: "/result",
        label: "Kết quả quan trắc",
      },
      {
        key: "/warning",
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
    key: "/report",
    icon: <FileTextOutlined />,
    label: "Báo cáo",
  },
];