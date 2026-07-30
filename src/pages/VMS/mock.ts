import type {
    VMSDashboard,
    VMSTrend,
    VMSStatus,
    VMSWarning,
} from "./types";

export const dashboard: VMSDashboard = {
    online: 1182,
    offline: 74,
    warning: 23,
    sos: 2,
};

export const trend: VMSTrend[] = [
    { hour: "00h", online: 1105, offline: 55 },
    { hour: "04h", online: 1128, offline: 60 },
    { hour: "08h", online: 1182, offline: 74 },
    { hour: "12h", online: 1160, offline: 68 },
    { hour: "16h", online: 1142, offline: 71 },
    { hour: "20h", online: 1175, offline: 66 },
];

export const status: VMSStatus[] = [
    {
        name: "Online",
        value: 92,
    },
    {
        name: "Offline",
        value: 6,
    },
    {
        name: "SOS",
        value: 2,
    },
];

export const warnings: VMSWarning[] = [
    {
        id: 1,
        vessel: "CT-90001-TS",
        area: "Trường Sa",
        event: "Mất tín hiệu",
        time: "08:15",
        level: "Cao",
    },
    {
        id: 2,
        vessel: "CM-11012-TS",
        area: "Phú Quốc",
        event: "Ngoài vùng",
        time: "09:42",
        level: "Trung bình",
    },
    {
        id: 3,
        vessel: "BL-22009-TS",
        area: "Côn Đảo",
        event: "SOS",
        time: "10:18",
        level: "Cao",
    },
];