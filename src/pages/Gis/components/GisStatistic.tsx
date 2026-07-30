import { Card, Col, Row, Statistic } from "antd";
import {
    DashboardOutlined,
    CheckCircleOutlined,
    EnvironmentOutlined,
    WarningOutlined
} from "@ant-design/icons";

interface Props {
    total: number;
    normal: number;
    monitoring: number;
    warning: number;
}

export default function GisStatistic({
    total,
    normal,
    monitoring,
    warning
}: Props) {
    return (

        <Row gutter={16}>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Điểm quan trắc"
                        value={total}
                        prefix={<DashboardOutlined />}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Hoạt động bình thường"
                        value={normal}
                        prefix={<CheckCircleOutlined />}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Theo dõi"
                        value={monitoring}
                        prefix={<EnvironmentOutlined />}
                    />
                </Card>
            </Col>

            <Col span={6}>
                <Card>
                    <Statistic
                        title="Cảnh báo"
                        value={warning}
                        prefix={<WarningOutlined />}
                    />
                </Card>
            </Col>

        </Row>

    );
}