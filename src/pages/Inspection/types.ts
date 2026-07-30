export interface InspectionDashboard {
    total: number;
    inspected: number;
    expiring: number;
    expired: number;
}

export interface InspectionMonthly {
    month: string;
    value: number;
}

export interface InspectionResult {
    name: string;
    value: number;
}

export interface InspectionWarning {
    id: number;
    vessel: string;
    owner: string;
    expired: string;
    status: "Đạt" | "Sắp đến hạn" | "Quá hạn";
}