import type { Farm } from "../types/farm";

export const farmList: Farm[] = [
    {
        id: "1",
        code: "NT001",
        name: "Vùng nuôi cá tra Thới Lai",
        district: "Thới Lai",
        species: "Cá tra",
        area: 120,
        production: 2500,
        owner: "Nguyễn Văn A",
        phone: "0909123456",
        status: "active",
    },
    {
        id: "2",
        code: "NT002",
        name: "HTX Cá tra Cờ Đỏ",
        district: "Cờ Đỏ",
        species: "Cá tra",
        area: 86,
        production: 1800,
        owner: "Trần Văn B",
        phone: "0909888777",
        status: "active",
    },
    {
        id: "3",
        code: "NT003",
        name: "Vùng nuôi tôm Vĩnh Thạnh",
        district: "Vĩnh Thạnh",
        species: "Tôm",
        area: 95,
        production: 1200,
        owner: "Lê Văn C",
        phone: "0911222333",
        status: "inactive",
    },
    {
        id: "4",
        code: "NT004",
        name: "Nuôi cá lồng Ô Môn",
        district: "Ô Môn",
        species: "Cá lồng",
        area: 60,
        production: 980,
        owner: "Phạm Văn D",
        phone: "0933444555",
        status: "active",
    },
    {
        id: "5",
        code: "NT005",
        name: "HTX Thủy sản Thốt Nốt",
        district: "Thốt Nốt",
        species: "Cá tra",
        area: 150,
        production: 3200,
        owner: "Đặng Văn E",
        phone: "0944555666",
        status: "active",
    },
];

const districts = [
    "Ninh Kiều",
    "Bình Thủy",
    "Cái Răng",
    "Ô Môn",
    "Thốt Nốt",
    "Vĩnh Thạnh",
    "Cờ Đỏ",
    "Phong Điền",
    "Thới Lai",
];

const species = [
    "Cá tra",
    "Tôm",
    "Cá rô",
    "Cá lóc",
    "Cá lồng",
];

for (let i = 6; i <= 30; i++) {
    farmList.push({
        id: String(i),
        code: `NT${String(i).padStart(3, "0")}`,
        name: `Vùng nuôi thủy sản ${i}`,
        district: districts[i % districts.length],
        species: species[i % species.length],
        area: 50 + i * 3,
        production: 500 + i * 120,
        owner: `Chủ hộ ${i}`,
        phone: `0909${String(i).padStart(6, "0")}`,
        status: i % 5 === 0 ? "inactive" : "active",
    });
}