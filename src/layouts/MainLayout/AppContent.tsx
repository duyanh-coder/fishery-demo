import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppBreadcrumb from "./AppBreadcrumb";

const { Content } = Layout;

export default function AppContent() {
  return (
    <Content className="main-content">
      <AppBreadcrumb />

      <Outlet />
    </Content>
  );
}
