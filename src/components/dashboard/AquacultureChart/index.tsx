import ReactECharts from "echarts-for-react";
import { Card } from "antd";

import type { AquacultureChartItem } from "@/types/dashboard";

import { getAquacultureChartOption } from "./option";

import "./style.scss";
import { panelHeaderStyleSecondary, panelStyle } from "@/theme/panel";

interface Props {
    data: AquacultureChartItem[];
}

const AquacultureChart = ({ data }: Props) => {
    return (
        <Card
            {...panelHeaderStyleSecondary}
            style={panelStyle}
            title="Diện tích nuôi trồng"
            className="aquaculture-chart"
        >
            <ReactECharts
                option={getAquacultureChartOption(data)}
                style={{
                    height: 350,
                }}
            />
        </Card>
    );
};

export default AquacultureChart;