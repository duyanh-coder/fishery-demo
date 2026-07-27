export type GISMarkerType =
    | "farm"
    | "port"
    | "monitoring"
    | "warning"
    | "vessel";

export type GISStatus =
    | "normal"
    | "warning"
    | "danger";

export interface GISMarker {

    id: number;

    name: string;

    type: GISMarkerType;

    latitude: number;

    longitude: number;

    status: GISStatus;

    description?: string;

}