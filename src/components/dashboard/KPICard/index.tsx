import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    MinusOutlined,
} from "@ant-design/icons";
import { Card, Col, Statistic, Tag } from "antd";

import "./style.scss";
import type { DashboardKPI } from "@/types/dashboard";
import { statisticCard } from "@/theme/statistic";

interface Props {
    item: DashboardKPI;
}

const KPICard = ({ item }: Props) => {
    const renderTrend = () => {
        switch (item.trend) {
            case "up":
                return (
                    <Tag color="success" icon={<ArrowUpOutlined />}>
                        +{item.percent}%
                    </Tag>
                );

            case "down":
                return (
                    <Tag color="error" icon={<ArrowDownOutlined />}>
                        {item.percent}%
                    </Tag>
                );

            default:
                return (
                    <Tag icon={<MinusOutlined />}>
                        0%
                    </Tag>
                );
        }
    };

    return (
        <Col
            xs={24}
            sm={12}
            md={8}
            xl={4}
        >
            <Card
                style={statisticCard}
                hoverable
                className="kpi-card"
            >
                <div className="kpi-card__header">

                    <div
                        className="kpi-card__icon"
                        style={{
                            background: item.color,
                        }}
                    >
                        {item.icon}
                    </div>

                    {renderTrend()}

                </div>

                <Statistic
                    title={item.title}
                    value={item.value}
                    suffix={item.unit}
                />

            </Card>
        </Col>
    );
};

export default KPICard;