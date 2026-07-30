export interface ProductionSummary {

    totalProduction: number;

    totalFarm: number;

    averageProduction: number;

    growthRate: number;

}

export interface ProductionTrend {

    month: string;

    production: number;

}

export interface ProvinceProduction {

    id: number;

    province: string;

    shrimp: number;

    fish: number;

    mollusk: number;

    total: number;

}

export interface ProductionTable {

    id: number;

    province: string;

    district: string;

    species: string;

    area: number;

    production: number;

    harvestDate: string;

}