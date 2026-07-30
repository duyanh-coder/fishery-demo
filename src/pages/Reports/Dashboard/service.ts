import {
    productionData,
    provinceRanking,
    recentReports,
    reportKPI,
    warningData,
    waterQualityData
} from "./mock";

const delay = (ms = 500) =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function getDashboardReport() {
    await delay();

    return {
        kpi: reportKPI,
        production: productionData,
        water: waterQualityData,
        warning: warningData,
        ranking: provinceRanking,
        reports: recentReports
    };
}