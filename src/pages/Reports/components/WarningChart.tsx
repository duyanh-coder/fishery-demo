import ReactECharts from "echarts-for-react";
import { Card } from "antd";
import type { WarningChartItem } from "../Dashboard/types";

interface Props {

    data: WarningChartItem[];

    loading?: boolean;

}
export default function WarningChart({

    data,

    loading

}: Props) {

    const option = {

        tooltip: {
            trigger: "item"
        },

        legend: {
            bottom: 0
        },

        series: [

            {

                name: "Cảnh báo",

                type: "pie",

                radius: ["45%", "70%"],

                data: data.map(item => ({

                    name: item.level,

                    value: item.value

                })),

                label: {
                    formatter: "{b}\n{c}"
                }

            }

        ]

    };
    return (

        <Card

            loading={loading}

            title="Thống kê cảnh báo môi trường"

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
