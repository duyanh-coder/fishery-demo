import type {
    GISFarm,
    GISPort,
    GISStation,
    GISVessel,
    GISWarning,
} from "@/types/gis";

export const farms: GISFarm[] = [
    {
        id: 1,
        name: "Vùng nuôi Cá Tra A",
        area: 125,
        production: 3200,
        species: "Cá Tra",
        owner: "Công ty ABC Seafood",
        coordinates: [
            [10.040, 105.720],
            [10.048, 105.731],
            [10.043, 105.745],
            [10.031, 105.739]
        ]
    },
    {
        id: 2,
        name: "Vùng nuôi Tôm Thẻ",
        area: 210,
        production: 5100,
        species: "Tôm Thẻ",
        owner: "HTX Thủy sản Cần Thơ",
        coordinates: [
            [10.015, 105.755],
            [10.022, 105.764],
            [10.011, 105.778],
            [10.004, 105.765]
        ]
    }
];

export const ports: GISPort[] = [
    {
        id: 1,
        name: "Cảng Cá Cái Cui",
        latitude: 10.0065,
        longitude: 105.7856,
        address: "Quận Cái Răng, TP. Cần Thơ",
        capacity: 150,
        vessels: 58,
        status: "Đang hoạt động"
    },
    {
        id: 2,
        name: "Cảng Cá Trần Đề",
        latitude: 9.4982,
        longitude: 106.2051,
        address: "Xã Trần Đề, Sóc Trăng",
        capacity: 220,
        vessels: 96,
        status: "Đang hoạt động"
    }
];

export const stations: GISStation[] = [
    {
        id: 1,
        name: "Trạm Quan trắc QT-01",
        latitude: 10.021,
        longitude: 105.728,
        temperature: 29.3,
        salinity: 7.8,
        ph: 7.2,
        do: 6.8,
        status: "Bình thường"
    },
    {
        id: 2,
        name: "Trạm Quan trắc QT-02",
        latitude: 10.043,
        longitude: 105.752,
        temperature: 30.1,
        salinity: 9.5,
        ph: 7.0,
        do: 5.9,
        status: "Theo dõi"
    },
    {
        id: 3,
        name: "Trạm Quan trắc QT-03",
        latitude: 9.998,
        longitude: 105.804,
        temperature: 31.2,
        salinity: 10.2,
        ph: 6.8,
        do: 5.1,
        status: "Cảnh báo"
    }

];

export const vessels: GISVessel[] = [
    {
        id: 1,
        name: "Tàu Cá CT-001",
        code: "CT-001",
        owner: "Nguyễn Văn A",
        latitude: 10.012,
        longitude: 105.801,
        speed: 12.5,
        heading: 90,
        status: "Đang hoạt động",
        lastUpdate: "09:25"
    },
    {
        id: 2,
        name: "Tàu Cá CT-002",
        code: "CT-002",
        owner: "Trần Văn B",
        latitude: 9.986,
        longitude: 105.775,
        speed: 8.2,
        heading: 135,
        status: "Đang neo",
        lastUpdate: "09:28"
    },
    {
        id: 3,
        name: "Tàu Cá CT-003",
        code: "CT-003",
        owner: "Lê Văn C",
        latitude: 10.036,
        longitude: 105.832,
        speed: 14.7,
        heading: 250,
        status: "Đang hoạt động",
        lastUpdate: "09:30"
    }
];

export const warnings: GISWarning[] = [
    {
        id: 1,
        title: "Cảnh báo IUU",
        type: "Mất tín hiệu VMS",
        level: "Cao",
        vesselCode: "CT-001",
        latitude: 10.015,
        longitude: 105.845,
        time: "09:35",
        description: "Tàu mất tín hiệu hơn 06 giờ."
    },
    {
        id: 2,
        title: "Cảnh báo IUU",
        type: "Vượt ranh giới",
        level: "Trung bình",
        vesselCode: "CT-005",
        latitude: 10.042,
        longitude: 105.861,
        time: "09:40",
        description: "Tàu đi vào khu vực cấm khai thác."
    },
    {
        id: 3,
        title: "Cảnh báo IUU",
        type: "Neo đậu bất thường",
        level: "Thấp",
        vesselCode: "CT-009",
        latitude: 9.982,
        longitude: 105.792,
        time: "09:45",
        description: "Tàu dừng lâu bất thường trên biển."
    }
];
