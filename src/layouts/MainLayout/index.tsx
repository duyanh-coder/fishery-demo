import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import AppSidebar from "@/layouts/MainLayout/AppSidebar";
import AppHeader from "@/layouts/MainLayout/AppHeader";

const { Content } = Layout;

export default function MainLayout() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AppSidebar />

            <Layout>
                <AppHeader />

                <Content
                    style={{
                        padding: 24,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}