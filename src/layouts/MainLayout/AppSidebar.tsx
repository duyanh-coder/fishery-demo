import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import AppLogo from "./AppLogo";
import { menuItems } from "@/router/menu";

const { Sider } = Layout;

export default function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootPath = "/" + location.pathname.split("/").filter(Boolean)[0];

  return (
    <Sider
      width={260}
      theme="dark"
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflow: "auto",
      }}
      className="app-sidebar"
    >
      <div
        // className="logo"
        className="app-sidebar__logo"
      >
        <AppLogo />
      </div>

      <div className="app-sidebar__content">
        <Menu
          className="app-sidebar__menu"
          mode="inline"
          theme="dark"
          selectedKeys={[rootPath === "/" ? "/" : rootPath]}
          defaultOpenKeys={[
            "aquaculture",
            // "fishing",
            // "monitoring"
          ]}
          onClick={({ key }) => {
            if (key.startsWith("/")) {
              navigate(key);
            }
          }}
          items={menuItems}
        />
      </div>
    </Sider>
  );
}
