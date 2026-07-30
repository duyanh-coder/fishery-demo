import {
    provinceData,
    summary,
    tableData,
    trend
} from "./mock";

const delay = (ms = 500) =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function getProductionReport() {

    await delay();

    return {

        summary,

        trend,

        provinceData,

        tableData

    };

}