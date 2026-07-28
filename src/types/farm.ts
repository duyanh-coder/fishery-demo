export interface Farm {
    id: string;
    code: string;
    name: string;

    district: string;
    species: string;
    area: number;
    production: number;
    owner: string;
    phone: string;
    status: "active" | "inactive";
}

export interface FarmFilter {
    keyword: string;
    district?: string;
    species?: string;
    status?: "active" | "inactive";
}