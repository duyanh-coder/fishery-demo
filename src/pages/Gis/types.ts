export interface GISMarker {
    id: number;
    station: string;
    province: string;
    district: string;
    lat: number;
    lng: number;
    status: "Tốt" | "Theo dõi" | "Cảnh báo";
    warningLevel?: "Thấp" | "Trung bình" | "Cao" | "Khẩn cấp";
    lastUpdate: string;
    ph: number;
    do: number;
    temperature: number;
    salinity: number;
}