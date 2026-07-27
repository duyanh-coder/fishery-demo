import ReactECharts from "echarts-for-react";
import { Card } from "antd";

import "./style.scss";
import type { ProductionChartItem } from "@/types/dashboard";
import { getProductionChartOption } from "./option";

interface Props {
    data: ProductionChartItem[];
}

const ProductionChart = ({ data }: Props) => {
    return (
        <Card
            title="Sản lượng thủy sản theo tháng"
            className="production-chart"
        >
            <ReactECharts
                option={getProductionChartOption(data)}
                style={{
                    height: 350,
                }}
            />
        </Card>
    );
};

export default ProductionChart;