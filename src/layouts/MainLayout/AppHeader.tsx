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
    theme
} from "antd";

import {
    UserOutlined,
    BellOutlined,
    MoonOutlined,
    SunOutlined,
    LogoutOutlined,
    SettingOutlined,
    ProfileOutlined,
} from "@ant-design/icons";

// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

import "./styles.scss";

const { Header } = Layout;

export default function AppHeader() {
    const location = useLocation();
    const { theme: themeMode, toggleTheme } = useTheme();

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

            case "/seed":
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

            case "/monitoring":
                return {
                    title: "Quan trắc môi trường",
                    items: ["Quan trắc môi trường"],
                };

            case "/gis":
                return {
                    title: "GIS",
                    items: ["GIS"],
                };

            case "/report":
                return {
                    title: "Báo cáo",
                    items: ["Báo cáo"],
                };

            default:
                return {
                    title: "Dashboard",
                    items: ["Dashboard"],
                };
        }
    };

    const breadcrumb = getBreadcrumb(location.pathname);

    return (

        // <Header className="main-header">
        <Header
            className="main-header"
            style={{
                background: colorBgContainer,
                borderBottom: `1px solid ${colorBorderSecondary}`,
            }}
        >
            <div>
                {/* <Typography.Title level={4} style={{ margin: 0 }}>
                    {breadcrumb.title}
                </Typography.Title> */}

                {/* <Breadcrumb
                    items={breadcrumb.items.map((item) => ({
                        title: item,
                    }))}
                /> */}

                <Typography.Title
                    level={4}
                    style={{
                        margin: 0,
                        color: colorText,
                    }}
                >
                    {breadcrumb.title}
                </Typography.Title>

                <Breadcrumb
                    items={breadcrumb.items.map((item) => ({
                        title: (
                            <span style={{ color: colorTextSecondary }}>
                                {item}
                            </span>
                        ),
                    }))}
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
                        <Button
                            shape="circle"
                            type="text"
                            icon={<BellOutlined />}
                        />
                    </Badge>
                </Popover>
                <Switch
                    checked={themeMode === "dark"}
                    onChange={toggleTheme}
                    checkedChildren={<MoonOutlined />}
                    unCheckedChildren={<SunOutlined />}
                />

                <Dropdown
                    menu={userMenu}
                    placement="bottomRight"
                >
                    <Space style={{ cursor: "pointer" }}>
                        <Typography.Text>
                            Quản trị viên
                        </Typography.Text>

                        <Avatar icon={<UserOutlined />} />
                    </Space>
                </Dropdown>
            </Space>
        </Header>
    );
}