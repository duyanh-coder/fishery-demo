
import type { AquacultureChartItem } from "@/types/dashboard";
import type { EChartsOption } from "echarts";

export const getAquacultureChartOption = (
    data: AquacultureChartItem[]
): EChartsOption => ({
    tooltip: {
        trigger: "axis",
    },

    legend: {
        top: 0,
    },

    grid: {
        left: 50,
        right: 20,
        top: 40,
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
            name: "Cá tra",
            type: "bar",
            stack: "total",
            data: data.map((item) => item.pangasius),
        },
        {
            name: "Tôm",
            type: "bar",
            stack: "total",
            data: data.map((item) => item.shrimp),
        },
        {
            name: "Khác",
            type: "bar",
            stack: "total",
            data: data.map((item) => item.other),
        },
    ],
});