export interface ReportKPI {
    totalReports: number;
    productionReports: number;
    waterReports: number;
    warningReports: number;
}

export interface ReportFilter {
    year?: number;
    quarter?: number;
    month?: number;
    province?: string;
    reportType?: string;
}

export interface ProductionChartItem {
    month: string;
    production: number;
}

export interface WaterQualityChartItem {
    month: string;
    ph: number;
    doValue: number;
    salinity: number;
}

export interface WarningChartItem {
    level: string;
    value: number;
}

export interface ProvinceRankingItem {
    id: number;
    province: string;
    production: number;
    warning: number;
    score: number;
}

export interface RecentReport {
    id: number;
    reportName: string;
    type: string;
    createdDate: string;
    createdBy: string;
    format: string;
}