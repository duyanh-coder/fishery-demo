import type { Farm } from "./types";

export const farms: Farm[] = [
    {
        id: 1,
        code: "NT001",
        name: "Vùng nuôi cá tra 01",

        owner: "Nguyễn Văn A",
        phone: "0909123456",
        address: "Ô Môn, Cần Thơ",

        ward: "Ô Môn",
        species: "Cá tra",

        area: 12.5,
        production: 180,

        status: "ACTIVE",

        issuedDate: "20/02/2025",

        location: {
            lat: 10.1205,
            lng: 105.623,
            address: "Ô Môn, Cần Thơ",
        },

        polygon: [
            [10.1212, 105.6222],
            [10.1215, 105.6235],
            [10.1208, 105.6242],
            [10.1199, 105.6240],
            [10.1195, 105.6228],
            [10.1200, 105.6219],
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
    {
        id: 2,
        code: "NT002",
        name: "Vùng nuôi tôm Thốt Nốt",

        owner: "Trần Văn Bình",
        phone: "0912345678",
        address: "Thốt Nốt, Cần Thơ",

        ward: "Thốt Nốt",
        species: "Tôm",

        area: 18.2,
        production: 95,

        status: "WARNING",

        issuedDate: "15/03/2025",

        location: {
            lat: 10.2748,
            lng: 105.5312,
            address: "Thốt Nốt, Cần Thơ",
        },

        polygon: [
            [10.2754, 105.5303],
            [10.2759, 105.5318],
            [10.2749, 105.5326],
            [10.2739, 105.5321],
            [10.2737, 105.5308],
            [10.2746, 105.5301],
        ],

        waterQuality: {
            ph: 7.6,
            do: 5.1,
            temperature: 29,
            salinity: 6.5,
            nh3: 0.03,
            alkalinity: 118,
        },

        productionHistory: [],
        inspections: [],
        activities: [],
    },
    {
        id: 3,
        code: "NT003",
        name: "Vùng nuôi cua Vĩnh Thạnh",

        owner: "Lê Văn Cường",
        phone: "0923456789",
        address: "Vĩnh Thạnh, Cần Thơ",

        ward: "Vĩnh Thạnh",
        species: "Cua",

        area: 10.8,
        production: 62,

        status: "INACTIVE",

        issuedDate: "02/04/2025",

        location: {
            lat: 10.2215,
            lng: 105.4036,
            address: "Vĩnh Thạnh, Cần Thơ",
        },

        polygon: [
            [10.2222, 105.4028],
            [10.2226, 105.4042],
            [10.2217, 105.4050],
            [10.2208, 105.4045],
            [10.2205, 105.4032],
            [10.2212, 105.4025],
        ],

        waterQuality: {
            ph: 7.2,
            do: 4.7,
            temperature: 30,
            salinity: 10.2,
            nh3: 0.04,
            alkalinity: 105,
        },

        productionHistory: [],
        inspections: [],
        activities: [],
    },
    {
        id: 4,
        code: "NT004",
        name: "Vùng nuôi cá tra Cờ Đỏ",

        owner: "Phạm Quốc Dũng",
        phone: "0934567890",
        address: "Cờ Đỏ, Cần Thơ",

        ward: "Cờ Đỏ",
        species: "Cá tra",

        area: 25.4,
        production: 310,

        status: "ACTIVE",

        issuedDate: "18/05/2025",

        location: {
            lat: 10.0964,
            lng: 105.4355,
            address: "Cờ Đỏ, Cần Thơ",
        },

        polygon: [
            [10.0970, 105.4346],
            [10.0978, 105.4360],
            [10.0969, 105.4368],
            [10.0958, 105.4362],
            [10.0956, 105.4349],
            [10.0964, 105.4342],
        ],

        waterQuality: {
            ph: 7.4,
            do: 5.9,
            temperature: 28,
            salinity: 0.3,
            nh3: 0.01,
            alkalinity: 120,
        },

        productionHistory: [],
        inspections: [],
        activities: [],
    },
];