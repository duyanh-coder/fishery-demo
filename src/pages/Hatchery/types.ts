export interface Hatchery {
    id: number;
    code: string;
    name: string;

    owner: string;
    phone: string;

    ward: string;

    species: string;

    capacity: number;

    production: number;

    status: "ACTIVE" | "WARNING" | "INACTIVE";

    address: string;

    licenseDate: string;
}