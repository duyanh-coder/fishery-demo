import ReactECharts from "echarts-for-react";
import {
    Card,
    Radio,
    Space,
    Typography
} from "antd";
import { useMemo, useState } from "react";
import type { ProductionChartItem } from "../Dashboard/types";

const { Text } = Typography;
interface Props {

    data: ProductionChartItem[];

    loading?: boolean;

}
export default function ProductionChart({

    data,

    loading

}: Props) {

    const [mode, setMode] = useState<"month" | "quarter" | "year">("month");

    const option = useMemo(() => ({

        tooltip: {
            trigger: "axis"
        },

        xAxis: {
            type: "category",
            data: data.map(x => x.month)
        },

        yAxis: {
            type: "value",
            name: "Tấn"
        },

        series: [

            {

                name: "Sản lượng",

                type: "bar",

                data: data.map(x => x.production),

                barMaxWidth: 40

            }

        ]

    }), [data]);
    return (

        <Card

            loading={loading}

            title="Sản lượng thủy sản"

            extra={

                <Radio.Group

                    value={mode}

                    onChange={(e) => setMode(e.target.value)}

                >

                    <Radio.Button value="month">

                        Tháng

                    </Radio.Button>

                    <Radio.Button value="quarter">

                        Quý

                    </Radio.Button>

                    <Radio.Button value="year">

                        Năm

                    </Radio.Button>

                </Radio.Group>

            }

        >

            <ReactECharts

                option={option}

                style={{

                    height: 380

                }}

            />
            <Space>

                <Text type="secondary">

                    Đơn vị: Tấn

                </Text>

            </Space>
        </Card>

    );

}