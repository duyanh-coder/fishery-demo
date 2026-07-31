import {
    Card,
    Col,
    Progress,
    Row,
    Statistic,
    Tag,
} from "antd";

import type { WaterQuality } from "../../types";

import "./style.scss";
import { panelHeaderStyleSecondary, panelStyle } from "@/theme/panel";

interface Props {
    data: WaterQuality;
}

export default function WaterQualityCard({
    data,
}: Props) {

    return (

        <Card 
            {...panelHeaderStyleSecondary}
            style={panelStyle}
            title="Chất lượng nước"
            className="water-quality-card"
        >

            <Row gutter={[16,16]}>

                <Col span={12}>
                    <Statistic
                        title="pH"
                        value={data.ph}
                    />
                    <Progress
                        percent={data.ph * 10}
                        showInfo={false}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="DO"
                        value={data.do}
                        suffix="mg/L"
                    />
                    <Progress
                        percent={data.do * 10}
                        showInfo={false}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Nhiệt độ"
                        value={data.temperature}
                        suffix="°C"
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Độ mặn"
                        value={data.salinity}
                        suffix="‰"
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="NH3"
                        value={data.nh3}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Độ kiềm"
                        value={data.alkalinity}
                        suffix="mg/L"
                    />
                </Col>

            </Row>

            <div className="water-quality-card__status">

                <Tag color="success">
                    Đạt chuẩn
                </Tag>

            </div>

        </Card>

    );

}