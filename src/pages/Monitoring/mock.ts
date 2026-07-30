import type {
    MonitoringDashboard,
    WaterTrend,
    WaterQuality,
    MonitoringStation,
} from "./types";

export const dashboard: MonitoringDashboard = {
    stations: 182,
    warnings: 14,
    averagePH: 7.3,
    averageDO: 6.7,
};

export const trend: WaterTrend[] = [
    { time: "T1", ph: 7.1, oxygen: 6.4 },
    { time: "T2", ph: 7.0, oxygen: 6.3 },
    { time: "T3", ph: 7.2, oxygen: 6.5 },
    { time: "T4", ph: 7.4, oxygen: 6.7 },
    { time: "T5", ph: 7.5, oxygen: 6.8 },
    { time: "T6", ph: 7.3, oxygen: 6.7 },
    { time: "T7", ph: 7.2, oxygen: 6.6 },
    { time: "T8", ph: 7.3, oxygen: 6.8 },
];

export const quality: WaterQuality[] = [
    {
        name: "Tốt",
        value: 148,
    },
    {
        name: "Theo dõi",
        value: 26,
    },
    {
        name: "Nguy hiểm",
        value: 8,
    },
];

export const stations: MonitoringStation[] = [

    {
        id: 1,
        station: "Ô Môn",
        area: "Cần Thơ",
        ph: 7.2,
        oxygen: 6.8,
        temperature: 28,
        status: "Tốt",
    },

    {
        id: 2,
        station: "Thốt Nốt",
        area: "Cần Thơ",
        ph: 6.4,
        oxygen: 4.8,
        temperature: 30,
        status: "Theo dõi",
    },

    {
        id: 3,
        station: "Phong Điền",
        area: "Cần Thơ",
        ph: 5.9,
        oxygen: 3.5,
        temperature: 31,
        status: "Nguy hiểm",
    },

    {
        id: 4,
        station: "Long Mỹ",
        area: "Hậu Giang",
        ph: 7.3,
        oxygen: 6.9,
        temperature: 28,
        status: "Tốt",
    },

    {
        id: 5,
        station: "Ngã Bảy",
        area: "Hậu Giang",
        ph: 6.7,
        oxygen: 5.2,
        temperature: 29,
        status: "Theo dõi",
    },

];