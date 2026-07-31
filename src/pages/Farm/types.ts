export interface FarmLocation {
    lat: number;
    lng: number;
    address: string;
}

export type Coordinate = [number, number];

export interface Farm {
    id: number;
    code: string;
    name: string;

    owner: string;
    phone: string;
    address: string;

    ward: string;
    species: string;

    area: number;
    production: number;

    status: "ACTIVE" | "WARNING" | "INACTIVE";

    issuedDate: string;

    location: FarmLocation;

    polygon: Coordinate[];

    waterQuality: WaterQuality;

    productionHistory: ProductionHistoryItem[];

    inspections: Inspection[];

    activities: Activity[];
}

export interface ProductionHistoryItem {
    month: string;
    production: number;
}

export interface WaterQuality {
    ph: number;
    do: number;
    temperature: number;
    salinity: number;
    nh3: number;
    alkalinity: number;
}

export interface Inspection {
    id: number;
    date: string;
    agency: string;
    content: string;
    result: string;
}
export interface Activity {
    id: number;
    date: string;
    title: string;
    description: string;

    type:
    | "STOCKING"
    | "HARVEST"
    | "INSPECTION"
    | "WATER";
}

