import { Card, Col, Row, Statistic } from "antd";
import {
    EnvironmentOutlined,
    AppstoreOutlined,
    RiseOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";

import { farmList } from "../../../mock/farm";

const FarmStatistic = () => {

    const totalFarm = farmList.length;

    const totalArea = farmList.reduce(
        (sum, item) => sum + item.area,
        0
    );

    const totalProduction = farmList.reduce(
        (sum, item) => sum + item.production,
        0
    );

    const totalActive = farmList.filter(
        item => item.status === "active"
    ).length;

    return (
        <Row gutter={[16, 16]}>

            <Col xs={24} sm={12} lg={6}>
                <Card>
                    <Statistic
                        title="Tổng vùng nuôi"
                        value={totalFarm}
                        prefix={<EnvironmentOutlined />}
                    />
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card>
                    <Statistic
                        title="Diện tích (ha)"
                        value={totalArea}
                        precision={2}
                        prefix={<AppstoreOutlined />}
                    />
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card>
                    <Statistic
                        title="Sản lượng (tấn)"
                        value={totalProduction}
                        precision={0}
                        prefix={<RiseOutlined />}
                    />
                </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Card>
                    <Statistic
                        title="Đang hoạt động"
                        value={totalActive}
                        suffix={`/ ${totalFarm}`}
                        prefix={<CheckCircleOutlined />}
                    />
                </Card>
            </Col>

        </Row>
    );
};

export default FarmStatistic;