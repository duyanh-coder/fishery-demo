import { Layout } from "antd";

import "./styles.scss";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";

export default function MainLayout() {

    return (

        <Layout className="main-layout">

            <AppSidebar />

            <Layout>

                <AppHeader />

                <AppContent />

                <AppFooter />

            </Layout>

        </Layout>

    );

}