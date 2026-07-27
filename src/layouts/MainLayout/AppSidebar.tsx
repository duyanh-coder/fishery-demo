import { Layout, Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";

import AppLogo from "./AppLogo";

const { Sider } = Layout;

export default function AppSidebar() {
  return (
    <Sider width={260} theme="dark">
      <div className="logo">
        <AppLogo />
      </div>

      <Menu
        mode="inline"

        theme="dark"

        defaultSelectedKeys={["dashboard"]}

        items={[
          {
            key: "dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
        ]}
      />
    </Sider>
  );
}
