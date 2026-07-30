export interface VMSDashboard {
    online: number;
    offline: number;
    warning: number;
    sos: number;
}

export interface VMSTrend {
    hour: string;
    online: number;
    offline: number;
}

export interface VMSStatus {
    name: string;
    value: number;
}

export interface VMSWarning {
    id: number;
    vessel: string;
    area: string;
    event: string;
    time: string;
    level: "Cao" | "Trung bình" | "Thấp";
}