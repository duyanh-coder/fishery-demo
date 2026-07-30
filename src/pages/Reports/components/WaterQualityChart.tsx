import ReactECharts from "echarts-for-react";
import { Card } from "antd";
import type { WaterQualityChartItem } from "../Dashboard/types";
interface Props {

    data: WaterQualityChartItem[];

    loading?: boolean;

}
export default function WaterQualityChart({

    data,

    loading

}: Props) {
    const option = {

        tooltip: {
            trigger: "axis"
        },

        legend: {
            top: 0
        },

        xAxis: {
            type: "category",
            data: data.map(x => x.month)
        },

        yAxis: {
            type: "value"
        },

        series: [

            {

                name: "pH",

                type: "line",

                smooth: true,

                data: data.map(x => x.ph)

            },

            {

                name: "DO",

                type: "line",

                smooth: true,

                data: data.map(x => x.doValue)

            },

            {

                name: "Độ mặn",

                type: "line",

                smooth: true,

                data: data.map(x => x.salinity)

            }

        ]

    };
    return (

        <Card

            loading={loading}

            title="Xu hướng chất lượng nước"

        >

            <ReactECharts

                option={option}

                style={{

                    height: 380

                }}

            />

        </Card>

    );

}
