import type { LatLngExpression } from "leaflet";

export interface GISFarm {
    id: number;
    name: string;
    coordinates: LatLngExpression[];
    area: number;
    production: number;
}

export interface GISPort {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    capacity: number;
}

export interface GISStation {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    temperature: number;
    salinity: number;
    ph: number;
    do: number;
    status: string;
}

export interface GISVessel {
    id: number;
    name: string;
    code: string;
    owner: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    status: string;
    lastUpdate: string;
}

export interface GISWarning {
    id: number;
    title: string;
    type: string;
    level: "Thấp" | "Trung bình" | "Cao";
    vesselCode: string;
    latitude: number;
    longitude: number;
    time: string;
    description: string;
}

export interface GISFarm {
    id: number;
    name: string;
    coordinates: LatLngExpression[];
    area: number;
    production: number;
    species: string;
    owner: string;
}

export interface GISPort {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    capacity: number;
    vessels: number;
    status: string;
}
