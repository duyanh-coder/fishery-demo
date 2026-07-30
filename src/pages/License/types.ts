export interface LicenseMonthly {
    month: string;
    value: number;
}

export interface LicenseType {
    name: string;
    value: number;
}

export interface LicenseWarning {
    id: number;
    license: string;
    vessel: string;
    owner: string;
    expired: string;
    status: "Hiệu lực" | "Sắp hết" | "Quá hạn";
}

export interface LicenseDashboard {
    total: number;
    active: number;
    expiring: number;
    expired: number;
}