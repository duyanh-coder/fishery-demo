import type {
    LicenseDashboard,
    LicenseMonthly,
    LicenseType,
    LicenseWarning,
} from "./types";

export const licenseDashboard: LicenseDashboard = {
    total: 2684,
    active: 2518,
    expiring: 124,
    expired: 42,
};

export const licenseMonthly: LicenseMonthly[] = [
    { month: "T1", value: 85 },
    { month: "T2", value: 91 },
    { month: "T3", value: 103 },
    { month: "T4", value: 97 },
    { month: "T5", value: 115 },
    { month: "T6", value: 126 },
    { month: "T7", value: 132 },
    { month: "T8", value: 118 },
    { month: "T9", value: 111 },
    { month: "T10", value: 105 },
    { month: "T11", value: 96 },
    { month: "T12", value: 88 },
];

export const licenseType: LicenseType[] = [
    {
        name: "Khai thác xa bờ",
        value: 46,
    },
    {
        name: "Khai thác ven bờ",
        value: 28,
    },
    {
        name: "Hậu cần nghề cá",
        value: 15,
    },
    {
        name: "Dịch vụ",
        value: 7,
    },
    {
        name: "Khác",
        value: 4,
    },
];

export const licenseWarnings: LicenseWarning[] = [
    {
        id: 1,
        license: "GP-0001",
        vessel: "CT-90012-TS",
        owner: "Nguyễn Văn A",
        expired: "12/08/2026",
        status: "Sắp hết",
    },
    {
        id: 2,
        license: "GP-0015",
        vessel: "BL-22015-TS",
        owner: "Trần Văn B",
        expired: "05/08/2026",
        status: "Quá hạn",
    },
    {
        id: 3,
        license: "GP-0024",
        vessel: "CM-11003-TS",
        owner: "Lê Văn C",
        expired: "18/08/2026",
        status: "Sắp hết",
    },
    {
        id: 4,
        license: "GP-0031",
        vessel: "KG-90115-TS",
        owner: "Phạm Văn D",
        expired: "21/08/2026",
        status: "Hiệu lực",
    },
    {
        id: 5,
        license: "GP-0048",
        vessel: "BT-10021-TS",
        owner: "Ngô Văn E",
        expired: "25/08/2026",
        status: "Sắp hết",
    },
];