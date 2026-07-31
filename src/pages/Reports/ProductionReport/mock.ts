import type {
    ProductionSummary,
    ProductionTrend,
    ProvinceProduction,
    ProductionTable
} from "./types";

export const summary: ProductionSummary = {

    totalProduction: 28650,

    totalFarm: 1240,

    averageProduction: 23.1,

    growthRate: 8.4

};

export const trend: ProductionTrend[] = [

    { month: "T1", production: 2100 },
    { month: "T2", production: 2450 },
    { month: "T3", production: 2800 },
    { month: "T4", production: 3150 },
    { month: "T5", production: 3520 },
    { month: "T6", production: 3890 }

];

export const provinceData: ProvinceProduction[] = [

    {
        id: 1,
        province: "Cà Mau",
        shrimp: 8200,
        fish: 3200,
        mollusk: 1600,
        total: 13000
    },

    {
        id: 2,
        province: "Kiên Giang",
        shrimp: 6500,
        fish: 3800,
        mollusk: 1200,
        total: 11500
    },

    {
        id: 3,
        province: "Sóc Trăng",
        shrimp: 5100,
        fish: 2600,
        mollusk: 900,
        total: 8600
    }

];

export const tableData: ProductionTable[] = [

    {
        id: 1,
        province: "Cà Mau",
        ward: "Đầm Dơi",
        species: "Tôm sú",
        area: 120,
        production: 620,
        harvestDate: "15/07/2026"
    },

    {
        id: 2,
        province: "Kiên Giang",
        ward: "An Biên",
        species: "Cá tra",
        area: 85,
        production: 410,
        harvestDate: "16/07/2026"
    }

];