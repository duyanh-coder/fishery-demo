import { Button, Card, Col, Descriptions, Divider, Row, Space, Tag, Typography } from "antd";
import { EnvironmentOutlined, ExperimentOutlined, AlertOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
    data: any;
}

export default function StationPopup({ data }: Props) {

    const navigate = useNavigate();

    return (

        <Card
            bordered={false}
            style={{
                width: 330,
                boxShadow: "none"
            }}
            bodyStyle={{
                padding: 12
            }}
        >
            <Space
                direction="vertical"
                size={4}
                style={{ width: "100%" }}
            >

                <Text strong style={{ fontSize: 16 }}>
                    📍 {data.station}
                </Text>

                <Tag
                    color={
                        data.status === "Tốt"
                            ? "success"
                            : data.status === "Theo dõi"
                                ? "warning"
                                : "error"
                    }
                    style={{ width: "fit-content" }}
                >
                    {data.status}
                </Tag>

            </Space>
            <Divider style={{ margin: "12px 0" }} />
            <Descriptions
                size="small"
                column={1}
            >

                <Descriptions.Item label="Tỉnh/TP">
                    {data.province}
                </Descriptions.Item>

                <Descriptions.Item label="Phường/Xã">
                    {data.ward}
                </Descriptions.Item>

                <Descriptions.Item
                    label="Cập nhật"
                >
                    <Space size={4}>
                        <ClockCircleOutlined />
                        {data.lastUpdate}
                    </Space>
                </Descriptions.Item>

                <Descriptions.Item label="pH">
                    {data.ph}
                </Descriptions.Item>

                <Descriptions.Item label="DO">
                    {data.do} mg/L
                </Descriptions.Item>

                <Descriptions.Item label="Nhiệt độ">
                    {data.temperature} °C
                </Descriptions.Item>

                <Descriptions.Item label="Độ mặn">
                    {data.salinity} ‰
                </Descriptions.Item>

            </Descriptions>
            <Divider style={{ margin: "12px 0" }} />

            <Space
                orientation="vertical"
                style={{ width: "100%" }}
            >
                <Row gutter={8} style={{ marginBottom: 12 }}>

                    <Col span={12}>
                        <Card size="small">
                            <Text type="secondary">pH</Text>
                            <br />
                            <Text strong>{data.ph}</Text>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card size="small">
                            <Text type="secondary">DO</Text>
                            <br />
                            <Text strong>{data.do} mg/L</Text>
                        </Card>
                    </Col>

                </Row>

                <Button
                    block
                    icon={<EnvironmentOutlined />}
                    onClick={() => {
                        navigate("/station");
                    }}
                >
                    Xem điểm quan trắc
                </Button>

                <Button
                    block
                    icon={<ExperimentOutlined />}
                    type="primary"
                    onClick={() => {
                        navigate("/water-quality");
                    }}
                >
                    Kết quả quan trắc
                </Button>

                <Button
                    block
                    danger
                    icon={<AlertOutlined />}
                    onClick={() => {
                        navigate("/environment-warning");
                    }}
                >
                    Cảnh báo môi trường
                </Button>

            </Space>
            {
                data.warningLevel && (
                    <Tag color="magenta">
                        Mức cảnh báo: {data.warningLevel}
                    </Tag>
                )
            }


        </Card>
    )
}