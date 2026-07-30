export interface MonitoringDashboard {
    stations: number;
    warnings: number;
    averagePH: number;
    averageDO: number;
}

export interface WaterTrend {
    time: string;
    ph: number;
    oxygen: number;
}

export interface WaterQuality {
    name: string;
    value: number;
}

export interface MonitoringStation {
    id: number;
    station: string;
    area: string;
    ph: number;
    oxygen: number;
    temperature: number;
    status: "Tốt" | "Theo dõi" | "Nguy hiểm";
}