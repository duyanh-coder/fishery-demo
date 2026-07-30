import type {
    InspectionDashboard,
    InspectionMonthly,
    InspectionResult,
    InspectionWarning,
} from "./types";

export const inspectionDashboard: InspectionDashboard = {
    total: 1286,
    inspected: 1218,
    expiring: 53,
    expired: 15,
};

export const inspectionMonthly: InspectionMonthly[] = [
    { month: "T1", value: 72 },
    { month: "T2", value: 84 },
    { month: "T3", value: 79 },
    { month: "T4", value: 91 },
    { month: "T5", value: 108 },
    { month: "T6", value: 117 },
    { month: "T7", value: 123 },
    { month: "T8", value: 115 },
    { month: "T9", value: 96 },
    { month: "T10", value: 82 },
    { month: "T11", value: 75 },
    { month: "T12", value: 69 },
];

export const inspectionResult: InspectionResult[] = [
    { name: "Đạt", value: 94 },
    { name: "Khuyến nghị", value: 4 },
    { name: "Không đạt", value: 2 },
];

export const inspectionWarnings: InspectionWarning[] = [
    {
        id: 1,
        vessel: "CT-90001-TS",
        owner: "Nguyễn Văn A",
        expired: "05/08/2026",
        status: "Sắp đến hạn",
    },
    {
        id: 2,
        vessel: "BL-22015-TS",
        owner: "Trần Văn B",
        expired: "28/07/2026",
        status: "Quá hạn",
    },
    {
        id: 3,
        vessel: "CM-11025-TS",
        owner: "Lê Văn C",
        expired: "20/09/2026",
        status: "Đạt",
    },
];