import type { Farm } from "./types";

export const farms: Farm[] = [
    {
        id: 1,
        code: "NT001",
        name: "Vùng nuôi cá tra 01",

        owner: "Nguyễn Văn A",
        phone: "0909123456",
        address: "Ô Môn, Cần Thơ",

        district: "Ô Môn",
        species: "Cá tra",

        area: 12.5,
        production: 180,

        status: "ACTIVE",

        issuedDate: "20/02/2025",

        location: {
            lat: 10.1205,
            lng: 105.623,
        },

        polygon: [
            [10.0358, 105.7462],
            [10.0365, 105.7480],
            [10.0351, 105.7493],
            [10.0338, 105.7481],
            [10.0342, 105.7465],
        ],

        waterQuality: {
            ph: 7.3,
            do: 5.8,
            temperature: 28,
            salinity: 0.4,
            nh3: 0.02,
            alkalinity: 110,
        },

        productionHistory: [
            { month: "T1", production: 18 },
            { month: "T2", production: 20 },
            { month: "T3", production: 21 },
            { month: "T4", production: 25 },
            { month: "T5", production: 19 },
            { month: "T6", production: 24 },
            { month: "T7", production: 26 },
            { month: "T8", production: 28 },
            { month: "T9", production: 31 },
            { month: "T10", production: 27 },
            { month: "T11", production: 23 },
            { month: "T12", production: 30 },
        ],

        inspections: [
            {
                id: 1,
                date: "10/03/2025",
                agency: "Chi cục Thủy sản",
                content: "Kiểm tra định kỳ",
                result: "Đạt",
            },
            {
                id: 2,
                date: "15/06/2025",
                agency: "Sở NN&PTNT",
                content: "Kiểm tra môi trường",
                result: "Đạt",
            },
        ],

        activities: [
            {
                id: 1,
                date: "20/06/2025",
                title: "Thu hoạch",
                description: "Thu hoạch đợt 1",
                type: "HARVEST",
            },
            {
                id: 2,
                date: "10/06/2025",
                title: "Kiểm tra",
                description: "Đoàn Chi cục Thủy sản",
                type: "INSPECTION",
            },
            {
                id: 3,
                date: "05/06/2025",
                title: "Lấy mẫu nước",
                description: "Kiểm tra chất lượng nước",
                type: "WATER",
            },
            {
                id: 4,
                date: "10/05/2025",
                title: "Thả giống",
                description: "25.000 con giống",
                type: "STOCKING",
            },
        ],
    },
];