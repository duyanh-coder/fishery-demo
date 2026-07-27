import type { GISMarker } from "@/types/gis";

export const gisMarkers: GISMarker[] = [

    {
        id: 1,
        name: "Vùng nuôi Cá Tra",
        type: "farm",
        latitude: 10.043,
        longitude: 105.746,
        status: "normal",
        description: "Diện tích 120 ha"
    },

    {
        id: 2,
        name: "Cảng Cái Cui",
        type: "port",
        latitude: 10.008,
        longitude: 105.785,
        status: "normal",
        description: "58 tàu đang neo"
    },

    {
        id: 3,
        name: "Trạm Quan Trắc QT-01",
        type: "monitoring",
        latitude: 10.032,
        longitude: 105.701,
        status: "warning",
        description: "Độ mặn tăng"
    },

    {
        id: 4,
        name: "Tàu CT-12345",
        type: "vessel",
        latitude: 9.931,
        longitude: 105.812,
        status: "normal",
        description: "Đang hoạt động"
    },

    {
        id: 5,
        name: "Cảnh báo IUU",
        type: "warning",
        latitude: 9.890,
        longitude: 105.990,
        status: "danger",
        description: "Mất tín hiệu VMS"
    }

];