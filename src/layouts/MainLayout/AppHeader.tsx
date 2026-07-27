import { Layout, Space, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./styles.scss";

const { Header } = Layout;

export default function AppHeader() {
    return (
        <Header className="main-header">

            <Typography.Title level={4} style={{ margin: 0 }}>
                Chuyển đổi số Thủy sản
            </Typography.Title>

            <Space>

                <Typography.Text>

                    Administrator

                </Typography.Text>

                <Avatar icon={<UserOutlined />} />

            </Space>

        </Header>
    );
}