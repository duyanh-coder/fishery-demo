import type { WaterQuality } from "./types";

export const waterQualitys: WaterQuality[] = [
    { id: 1, station: "Ô Môn 01", province: "Cần Thơ", district: "Ô Môn", waterType: "Kênh", measureTime: "29/07/2026 09:30", ph: 7.2, do: 6.8, temperature: 28, salinity: 15, nh3: 0.02, turbidity: 8, status: "Tốt" },
    { id: 2, station: "Thốt Nốt 01", province: "Cần Thơ", district: "Thốt Nốt", waterType: "Kênh", measureTime: "29/07/2026 08:45", ph: 7.1, do: 6.7, temperature: 29, salinity: 15, nh3: 0.03, turbidity: 9, status: "Tốt" },
    { id: 3, station: "Phong Điền", province: "Cần Thơ", district: "Phong Điền", waterType: "Ao nuôi", measureTime: "28/07/2026 17:10", ph: 6.5, do: 4.2, temperature: 31, salinity: 18, nh3: 0.12, turbidity: 18, status: "Cảnh báo" },
    { id: 4, station: "Long Mỹ", province: "Hậu Giang", district: "Long Mỹ", waterType: "Sông", measureTime: "29/07/2026 09:00", ph: 7.3, do: 7.1, temperature: 27, salinity: 13, nh3: 0.01, turbidity: 7, status: "Tốt" },
    { id: 5, station: "Ngã Bảy", province: "Hậu Giang", district: "Ngã Bảy", waterType: "Sông", measureTime: "29/07/2026 08:20", ph: 6.8, do: 5.5, temperature: 30, salinity: 17, nh3: 0.08, turbidity: 14, status: "Theo dõi" }
];

export const history = [
    { time: "29/07/2026 09:30", ph: 7.2, do: 6.8, temp: 28, salinity: 15, nh3: 0.02 },
    { time: "29/07/2026 08:30", ph: 7.1, do: 6.7, temp: 28, salinity: 15, nh3: 0.02 },
    { time: "29/07/2026 07:30", ph: 7.0, do: 6.6, temp: 29, salinity: 16, nh3: 0.03 },
    { time: "28/07/2026 16:30", ph: 6.9, do: 6.5, temp: 30, salinity: 17, nh3: 0.04 },
    { time: "28/07/2026 15:00", ph: 7.1, do: 6.8, temp: 28, salinity: 15, nh3: 0.02 }
];