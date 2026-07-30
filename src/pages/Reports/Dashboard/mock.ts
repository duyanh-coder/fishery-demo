import type {
    ProductionChartItem,
    ProvinceRankingItem,
    RecentReport,
    ReportKPI,
    WarningChartItem,
    WaterQualityChartItem
} from "./types";

export const reportKPI: ReportKPI = {
    totalReports: 1250,
    productionReports: 420,
    waterReports: 510,
    warningReports: 320
};

export const productionData: ProductionChartItem[] = [
    { month: "T1", production: 2100 },
    { month: "T2", production: 2500 },
    { month: "T3", production: 2800 },
    { month: "T4", production: 3000 },
    { month: "T5", production: 3400 },
    { month: "T6", production: 3800 }
];

export const waterQualityData: WaterQualityChartItem[] = [
    { month: "T1", ph: 7.4, doValue: 5.8, salinity: 16 },
    { month: "T2", ph: 7.3, doValue: 6.0, salinity: 18 },
    { month: "T3", ph: 7.2, doValue: 5.9, salinity: 17 },
    { month: "T4", ph: 7.5, doValue: 6.1, salinity: 19 },
    { month: "T5", ph: 7.4, doValue: 6.0, salinity: 20 },
    { month: "T6", ph: 7.6, doValue: 6.2, salinity: 21 }
];

export const warningData: WarningChartItem[] = [
    { level: "Thấp", value: 25 },
    { level: "Trung bình", value: 16 },
    { level: "Cao", value: 9 },
    { level: "Khẩn cấp", value: 3 }
];

export const provinceRanking: ProvinceRankingItem[] = [
    {
        id: 1,
        province: "Cà Mau",
        production: 18500,
        warning: 4,
        score: 96
    },
    {
        id: 2,
        province: "Kiên Giang",
        production: 17600,
        warning: 6,
        score: 93
    },
    {
        id: 3,
        province: "Sóc Trăng",
        production: 16200,
        warning: 8,
        score: 91
    }
];

export const recentReports: RecentReport[] = [
    {
        id: 1,
        reportName: "Báo cáo sản lượng tháng 06",
        type: "Production",
        createdDate: "20/07/2026",
        createdBy: "Admin",
        format: "Excel"
    },
    {
        id: 2,
        reportName: "Báo cáo chất lượng nước",
        type: "Water",
        createdDate: "19/07/2026",
        createdBy: "Admin",
        format: "PDF"
    }
];