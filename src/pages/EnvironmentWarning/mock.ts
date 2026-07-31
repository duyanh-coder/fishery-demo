import type { EnvironmentWarning } from "./types";

export const environmentWarnings: EnvironmentWarning[] = [
    {
        id: 1,
        station: "Trạm Ô Môn",
        province: "Cần Thơ",
        ward: "Ô Môn",
        warningTime: "29/07/2026 09:30",
        warningType: "NH3 vượt ngưỡng",
        level: "Cao",
        parameter: "NH3",
        value: 0.45,
        threshold: 0.30,
        status: "Đang xử lý",
        description: "Nồng độ NH3 tăng cao.",
        recommendation: "Thay nước và tăng cường sục khí."
    },
    {
        id: 2,
        station: "Trạm Thốt Nốt",
        province: "Cần Thơ",
        ward: "Thốt Nốt",
        warningTime: "29/07/2026 08:45",
        warningType: "DO thấp",
        level: "Trung bình",
        parameter: "DO",
        value: 3.8,
        threshold: 5,
        status: "Chưa xử lý",
        description: "Hàm lượng oxy hòa tan thấp.",
        recommendation: "Bật quạt nước và bổ sung oxy."
    },
    {
        id: 3,
        station: "Trạm Long Mỹ",
        province: "Hậu Giang",
        ward: "Long Mỹ",
        warningTime: "28/07/2026 16:20",
        warningType: "pH bất thường",
        level: "Thấp",
        parameter: "pH",
        value: 8.8,
        threshold: 8.5,
        status: "Đã xử lý",
        description: "pH cao hơn ngưỡng cho phép.",
        recommendation: "Theo dõi và điều chỉnh pH."
    },
    {
        id: 4,
        station: "Trạm Ngã Bảy",
        province: "Hậu Giang",
        ward: "Ngã Bảy",
        warningTime: "28/07/2026 13:10",
        warningType: "Độ mặn tăng",
        level: "Khẩn cấp",
        parameter: "Độ mặn",
        value: 28,
        threshold: 20,
        status: "Đang xử lý",
        description: "Độ mặn tăng đột biến.",
        recommendation: "Giảm độ mặn bằng cấp nước ngọt."
    },
    {
        id: 5,
        station: "Trạm Phong Điền",
        province: "Cần Thơ",
        ward: "Phong Điền",
        warningTime: "27/07/2026 14:30",
        warningType: "Độ đục cao",
        level: "Trung bình",
        parameter: "Độ đục",
        value: 55,
        threshold: 40,
        status: "Chưa xử lý",
        description: "Độ đục tăng do mưa lớn.",
        recommendation: "Theo dõi và xử lý nước."
    }
];

export const history = [
    {
        time: "29/07/2026 09:30",
        user: "Nguyễn Văn A",
        action: "Tiếp nhận cảnh báo",
        status: "Đang xử lý"
    },
    {
        time: "29/07/2026 10:00",
        user: "Trần Văn B",
        action: "Kiểm tra thực địa",
        status: "Đang xử lý"
    },
    {
        time: "29/07/2026 11:15",
        user: "Lê Văn C",
        action: "Đề xuất biện pháp xử lý",
        status: "Đang xử lý"
    },
    {
        time: "29/07/2026 14:20",
        user: "Phòng Quan trắc",
        action: "Theo dõi sau xử lý",
        status: "Hoàn thành"
    }
];