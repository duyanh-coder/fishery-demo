export interface EnvironmentWarning {
    id: number;
    station: string;
    province: string;
    ward: string;
    warningTime: string;
    warningType: string;
    level: "Thấp" | "Trung bình" | "Cao" | "Khẩn cấp";
    parameter: string;
    value: number;
    threshold: number;
    status: "Chưa xử lý" | "Đang xử lý" | "Đã xử lý";
    description: string;
    recommendation: string;
}