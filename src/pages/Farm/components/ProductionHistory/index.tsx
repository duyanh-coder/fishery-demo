import { Card } from "antd";

import ReactECharts from "echarts-for-react";

import buildOption from "./option";

import type { ProductionHistoryItem } from "../../types";

interface Props {
    data: ProductionHistoryItem[];
}

export default function ProductionHistory({
    data,
}: Props) {

    return (

        <Card title="Biểu đồ sản lượng">

            <ReactECharts
                option={buildOption(data)}
                style={{
                    height: 380,
                    fontFamily: "Segoe UI",
                }}
            />

        </Card>

    );

}