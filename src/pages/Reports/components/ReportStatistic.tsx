import { Card, Col, Row, Statistic } from "antd";
import {
    FileTextOutlined,
    BarChartOutlined,
    ExperimentOutlined,
    WarningOutlined
} from "@ant-design/icons";
import type { ReportKPI } from "../Dashboard/types";
interface Props {
    data: ReportKPI;
}
export default function ReportStatistic({ data }: Props) {

    return (

        <Row gutter={16}>

            <Col xs={24} sm={12} xl={6}>

                <Card>

                    <Statistic
                        title="Tổng báo cáo"
                        value={data.totalReports}
                        prefix={<FileTextOutlined />}
                    />

                </Card>

            </Col>

            <Col xs={24} sm={12} xl={6}>

                <Card>

                    <Statistic
                        title="Báo cáo sản lượng"
                        value={data.productionReports}
                        prefix={<BarChartOutlined />}
                    />

                </Card>

            </Col>

            <Col xs={24} sm={12} xl={6}>

                <Card>

                    <Statistic
                        title="Chất lượng nước"
                        value={data.waterReports}
                        prefix={<ExperimentOutlined />}
                    />

                </Card>

            </Col>

            <Col xs={24} sm={12} xl={6}>

                <Card>

                    <Statistic
                        title="Cảnh báo môi trường"
                        value={data.warningReports}
                        prefix={<WarningOutlined />}
                    />

                </Card>

            </Col>

        </Row>

    );

}
