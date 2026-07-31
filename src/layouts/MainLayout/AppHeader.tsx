import {
  Layout,
  Space,
  Avatar,
  Typography,
  Badge,
  Button,
  Dropdown,
  Popover,
  List,
  Switch,
  Breadcrumb,
  theme,
} from "antd";

import {
  UserOutlined,
  BellOutlined,
  MoonOutlined,
  SunOutlined,
  LogoutOutlined,
  SettingOutlined,
  ProfileOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

import "./styles.scss";

const { Header } = Layout;

export default function AppHeader() {
  const location = useLocation();
  const { theme: themeMode, toggleTheme } = useTheme();

  const navigate = useNavigate();

  // const isDetailPage = /^\/farm\/[^/]+$/.test(location.pathname);
  const isDetailPage =
    location.pathname.split("/").filter(Boolean).length === 2;

  const {
    token: {
      colorText,
      colorBgContainer,
      colorBorderSecondary,
      colorTextSecondary,
    },
  } = theme.useToken();

  const notifications = [
    {
      title: "Cảnh báo chất lượng nước tại Ô Môn",
    },
    {
      title: "02 tàu cá mất tín hiệu VMS",
    },
    {
      title: "Báo cáo tuần đã được tạo",
    },
    {
      title: "12 vùng nuôi vừa cập nhật",
    },
  ];

  const notificationContent = (
    <List
      size="small"
      dataSource={notifications}
      renderItem={(item) => <List.Item>{item.title}</List.Item>}
    />
  );

  const userMenu: any = {
    items: [
      {
        key: "profile",
        icon: <ProfileOutlined />,
        label: "Hồ sơ",
      },
      {
        key: "password",
        icon: <SettingOutlined />,
        label: "Đổi mật khẩu",
      },
      {
        type: "divider",
      },
      {
        key: "logout",
        icon: <LogoutOutlined />,
        danger: true,
        label: "Đăng xuất",
      },
    ],
  };

  const getBreadcrumb = (pathname: string) => {
    if (pathname.startsWith("/farm/")) {
      return {
        title: "Chi tiết vùng nuôi",
        items: ["Quản lý thủy sản", "Vùng nuôi", "Chi tiết"],
      };
    }
    if (pathname.startsWith("/hatchery/")) {
      return {
        title: "Chi tiết vùng nuôi",
        items: ["Quản lý thủy sản", "Cơ sở giống", "Chi tiết"],
      };
    }
    switch (pathname) {
      case "/":
      case "/dashboard":
        return {
          title: "Dashboard",
          items: ["Dashboard"],
        };

      case "/farm":
        return {
          title: "Vùng nuôi",
          items: ["Quản lý thủy sản", "Vùng nuôi"],
        };

      case "/hatchery":
        return {
          title: "Cơ sở giống",
          items: ["Quản lý thủy sản", "Cơ sở giống"],
        };

      case "/production":
        return {
          title: "Sản lượng",
          items: ["Quản lý thủy sản", "Sản lượng"],
        };

      case "/disease":
        return {
          title: "Dịch bệnh",
          items: ["Quản lý thủy sản", "Dịch bệnh"],
        };

      case "/vessel":
        return {
          title: "Tàu cá",
          items: ["Khai thác thủy sản", "Tàu cá"],
        };

      case "/license":
        return {
          title: "Giấy phép",
          items: ["Khai thác thủy sản", "Giấy phép"],
        };

      case "/inspection":
        return {
          title: "Đăng kiểm",
          items: ["Khai thác thủy sản", "Đăng kiểm"],
        };

      case "/vms":
        return {
          title: "VMS",
          items: ["Khai thác thủy sản", "VMS"],
        };

      case "/monitoring":
        return {
          title: "Quan trắc môi trường",
          items: ["Quan trắc môi trường"],
        };

      case "/station":
        return {
          title: "Điểm quan trắc",
          items: ["Quan trắc môi trường", "Điểm quan trắc"],
        };

      case "/water-quality":
        return {
          title: "Kết quả quan trắc",
          items: ["Quan trắc môi trường", "Kết quả quan trắc"],
        };

      case "/environment-warning":
        return {
          title: "Cảnh báo",
          items: ["Quan trắc môi trường", "Cảnh báo"],
        };

      case "/gis":
        return {
          title: "Bản đồ GIS",
          items: ["Bản đồ GIS"],
        };

      case "/reports-dashboard":
        return {
          title: "Tổng quan",
          items: ["Tổng quan"],
        };
      case "/reports-production":
        return {
          title: "Báo cáo sản lượng",
          items: ["Báo cáo sản lượng"],
        };
      default:
        return {
          title: "Dashboard",
          items: ["Dashboard"],
        };
    }
  };

  const breadcrumb = getBreadcrumb(location.pathname);

  const breadcrumbItems = breadcrumb.items.map((item, index) => {
    switch (item) {
      case "Dashboard":
        return {
          title: <Link to="/">Dashboard</Link>,
        };

      // Quản lý thủy sản

      case "Vùng nuôi":
        return {
          title: <Link to="/farm">Vùng nuôi</Link>,
        };

      case "Cơ sở giống":
        return {
          title: <Link to="/hatchery">Cơ sở giống</Link>,
        };

      case "Sản lượng":
        return {
          title: <Link to="/production">Sản lượng</Link>,
        };

      case "Dịch bệnh":
        return {
          title: <Link to="/disease">Dịch bệnh</Link>,
        };

      // Khai thác thủy sản

      case "Tàu cá":
        return {
          title: <Link to="/vessel">Tàu cá</Link>,
        };

      case "Giấy phép":
        return {
          title: <Link to="/license">Giấy phép</Link>,
        };

      case "Đăng kiểm":
        return {
          title: <Link to="/inspection">Đăng kiểm</Link>,
        };

      case "VMS":
        return {
          title: <Link to="/vms">VMS</Link>,
        };

      // Quan trắc môi trường

      case "Điểm quan trắc":
        return {
          title: <Link to="/station">Điểm quan trắc</Link>,
        };

      case "Kết quả quan trắc":
        return {
          title: <Link to="/water-quality">Kết quả quan trắc</Link>,
        }

      case "Cảnh báo":
        return {
          title: <Link to="/environment-warning">Cảnh báo</Link>,
        }

      // GIS

      case "GIS":
        return {
          title: <Link to="/gis">Bản đồ GIS</Link>,
        };

      // Báo cáo

      case "Báo cáo":
        return {
          title: <Link to="/reports-dashboard">Báo cáo</Link>,
        };

      default:
        return {
          title: item,
        };
    }
  });

  return (
    <Header
      className="main-header"
      style={{
        background: colorBgContainer,
        borderBottom: `1px solid ${colorBorderSecondary}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {isDetailPage && (
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate(-1)}
            />
          )}

          <Typography.Title
            level={4}
            style={{
              margin: 0,
              lineHeight: 1,
              color: colorText,
            }}
          >
            {breadcrumb.title}
          </Typography.Title>
        </div>

        <Breadcrumb
          items={breadcrumbItems}
          style={{
            margin: 0,
          }}
        />
      </div>

      <Space size="middle">
        <Popover
          title="Thông báo"
          placement="bottomRight"
          content={notificationContent}
          trigger="click"
        >
          <Badge count={notifications.length} size="small">
            <Button shape="circle" type="text" icon={<BellOutlined />} />
          </Badge>
        </Popover>
        <Switch
          checked={themeMode === "dark"}
          onChange={toggleTheme}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />

        <Dropdown menu={userMenu} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Typography.Text>Quản trị viên</Typography.Text>

            <Avatar icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
}
