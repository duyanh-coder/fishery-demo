
import type { ProductionChartItem } from "@/types/dashboard";
import type { EChartsOption } from "echarts";

export const getProductionChartOption = (
    data: ProductionChartItem[]
): EChartsOption => ({
    tooltip: {
        trigger: "axis",
    },

    grid: {
        left: 50,
        right: 20,
        top: 30,
        bottom: 40,
    },

    xAxis: {
        type: "category",
        data: data.map((item) => item.month),
    },

    yAxis: {
        type: "value",
    },

    series: [
        {
            name: "Sản lượng",
            type: "line",
            smooth: true,
            areaStyle: {},
            data: data.map((item) => item.production),
        },
    ],
});