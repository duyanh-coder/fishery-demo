import type { EChartsOption } from "echarts";

import type { ProductionHistoryItem } from "../../types";

export default function buildOption(
    data: ProductionHistoryItem[]
): EChartsOption {

    return {
        textStyle: {
            fontFamily: "Inter, Segoe UI, Arial, Tahoma, sans-serif",
        },

        tooltip: {
            trigger: "axis",
            textStyle: {
                fontFamily: "Inter, Segoe UI, Arial, Tahoma, sans-serif",
            },
        },

        legend: {
            top: 0,
        },

        grid: {
            left: 40,
            right: 20,
            bottom: 40,
            top: 50,
        },

        xAxis: {
            type: "category",
            data: data.map(item => item.month),
        },

        yAxis: {
            type: "value",
            name: "Tấn",
        },

        series: [
            {
                name: "Sản lượng",
                type: "line",

                smooth: true,

                areaStyle: {},

                data: data.map(item => item.production),
            },
        ],

    };

}