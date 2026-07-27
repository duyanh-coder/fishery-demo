import type {
    DashboardMock,
    DashboardKPI,
    ProductionChartItem,
    AquacultureChartItem,
    GISMarker,
    IUUAlert,
    RecentActivityItem,
} from "@/types/dashboard";

/* ============================================================
 * KPI
 * ============================================================ */

export const dashboardSummary: DashboardKPI[] = [
    {
        id: "vessel",
        title: "Tàu cá",
        value: 784,
        unit: "tàu",
        color: "#1677ff",
        percent: 3.2,
        trend: "up",
    },
    {
        id: "aquaculture",
        title: "Diện tích nuôi",
        value: "97.078",
        unit: "ha",
        color: "#13c2c2",
        percent: 1.8,
        trend: "up",
    },
    {
        id: "production",
        title: "Sản lượng",
        value: "751.452",
        unit: "tấn",
        color: "#52c41a",
        percent: 6.5,
        trend: "up",
    },
    {
        id: "seed",
        title: "Cơ sở giống",
        value: 215,
        unit: "cơ sở",
        color: "#722ed1",
        percent: 0.8,
        trend: "up",
    },
    {
        id: "monitoring",
        title: "Điểm quan trắc",
        value: 36,
        unit: "điểm",
        color: "#fa8c16",
        percent: 0,
        trend: "stable",
    },
    {
        id: "warning",
        title: "Cảnh báo IUU",
        value: 12,
        unit: "tàu",
        color: "#f5222d",
        percent: 1.5,
        trend: "down",
    },
];

/* ============================================================
 * Production Chart
 * ============================================================ */

export const productionChart: ProductionChartItem[] = [
    { month: "T1", production: 52 },
    { month: "T2", production: 58 },
    { month: "T3", production: 61 },
    { month: "T4", production: 65 },
    { month: "T5", production: 69 },
    { month: "T6", production: 74 },
    { month: "T7", production: 82 },
    { month: "T8", production: 88 },
    { month: "T9", production: 83 },
    { month: "T10", production: 79 },
    { month: "T11", production: 73 },
    { month: "T12", production: 68 },
];

/* ============================================================
 * Aquaculture Chart
 * ============================================================ */

export const aquacultureChart: AquacultureChartItem[] = [
    { month: "T1", pangasius: 35, shrimp: 15, other: 8 },
    { month: "T2", pangasius: 38, shrimp: 16, other: 8 },
    { month: "T3", pangasius: 40, shrimp: 17, other: 9 },
    { month: "T4", pangasius: 43, shrimp: 18, other: 9 },
    { month: "T5", pangasius: 46, shrimp: 20, other: 10 },
    { month: "T6", pangasius: 49, shrimp: 21, other: 10 },
    { month: "T7", pangasius: 52, shrimp: 22, other: 11 },
    { month: "T8", pangasius: 53, shrimp: 22, other: 11 },
    { month: "T9", pangasius: 50, shrimp: 21, other: 10 },
    { month: "T10", pangasius: 48, shrimp: 20, other: 10 },
    { month: "T11", pangasius: 44, shrimp: 18, other: 9 },
    { month: "T12", pangasius: 41, shrimp: 17, other: 8 },
];

/* ============================================================
 * GIS Marker
 * ============================================================ */

export const gisMarkers: GISMarker[] = [
    {
        id: 1,
        name: "Vùng nuôi Cá tra Thốt Nốt",
        type: "farm",
        latitude: 10.259,
        longitude: 105.531,
        status: "normal",
        value: 1250,
        description: "Diện tích nuôi tập trung",
    },
    {
        id: 2,
        name: "Điểm quan trắc Ô Môn",
        type: "monitoring",
        latitude: 10.131,
        longitude: 105.612,
        status: "warning",
        description: "DO thấp",
    },
    {
        id: 3,
        name: "Cảng cá Cái Cui",
        type: "port",
        latitude: 10.010,
        longitude: 105.785,
        status: "normal",
    },
    {
        id: 4,
        name: "Tàu CT-91234",
        type: "vessel",
        latitude: 10.181,
        longitude: 105.692,
        status: "danger",
        description: "Mất tín hiệu VMS",
    },
    {
        id: 5,
        name: "Khu bảo vệ nguồn lợi",
        type: "safe-zone",
        latitude: 10.324,
        longitude: 105.744,
        status: "normal",
    },
];

/* ============================================================
 * IUU Alert
 * ============================================================ */

export const iuuAlerts: IUUAlert[] = [
    {
        id: 1,
        level: "danger",
        title: "Mất kết nối VMS",
        description: "Tàu mất tín hiệu trên 06 giờ",
        quantity: 5,
    },
    {
        id: 2,
        level: "warning",
        title: "Sắp hết hạn giấy phép",
        description: "Trong vòng 30 ngày",
        quantity: 12,
    },
    {
        id: 3,
        level: "warning",
        title: "Sắp hết hạn đăng kiểm",
        description: "Trong vòng 30 ngày",
        quantity: 8,
    },
    {
        id: 4,
        level: "success",
        title: "Đã xử lý",
        description: "Hoàn thành trong ngày",
        quantity: 20,
    },
];

/* ============================================================
 * Recent Activity
 * ============================================================ */

export const recentActivities: RecentActivityItem[] = [
    {
        id: 1,
        time: "09:15",
        title: "Quan trắc môi trường",
        description: "DO vượt ngưỡng tại Thốt Nốt",
        type: "monitoring",
        status: "warning",
    },
    {
        id: 2,
        time: "09:00",
        title: "Tàu CT-91234",
        description: "Mất kết nối VMS",
        type: "vms",
        status: "error",
    },
    {
        id: 3,
        time: "08:40",
        title: "Giấy phép khai thác",
        description: "03 tàu sắp hết hạn",
        type: "license",
        status: "processing",
    },
    {
        id: 4,
        time: "08:10",
        title: "Nuôi trồng thủy sản",
        description: "Cập nhật sản lượng tháng 7",
        type: "aquaculture",
        status: "success",
    },
    {
        id: 5,
        time: "07:45",
        title: "Hệ thống",
        description: "Đồng bộ dữ liệu thành công",
        type: "system",
        status: "success",
    },
];

/* ============================================================
 * Dashboard Data
 * ============================================================ */

const dashboardMock: DashboardMock = {
    summary: dashboardSummary,
    productionChart,
    aquacultureChart,
    gisMarkers,
    iuuAlerts,
    recentActivities,
};

export default dashboardMock;