import type { GISMarker } from "./types";

export const gisMarkers: GISMarker[] = [
    {
        id: 1,
        station: "Trạm Ô Môn",
        province: "Cần Thơ",
        ward: "Ô Môn",
        lat: 10.1208,
        lng: 105.6187,
        status: "Tốt",
        lastUpdate: "29/07/2026 09:30",
        ph: 7.2,
        do: 6.8,
        temperature: 28,
        salinity: 15
    },
    {
        id: 2,
        station: "Trạm Thốt Nốt",
        province: "Cần Thơ",
        ward: "Thốt Nốt",
        lat: 10.2555,
        lng: 105.5301,
        status: "Theo dõi",
        warningLevel: "Trung bình",
        lastUpdate: "29/07/2026 09:20",
        ph: 6.8,
        do: 5.3,
        temperature: 29,
        salinity: 16
    },
    {
        id: 3,
        station: "Trạm Long Mỹ",
        province: "Hậu Giang",
        ward: "Long Mỹ",
        lat: 9.6802,
        lng: 105.5588,
        status: "Cảnh báo",
        warningLevel: "Cao",
        lastUpdate: "29/07/2026 09:10",
        ph: 8.6,
        do: 3.9,
        temperature: 31,
        salinity: 23
    }
];