import { Card, Col, Descriptions, Divider, Drawer, Row, Space, Statistic, Table, Tag, Timeline } from "antd";
import { DashboardOutlined, EnvironmentOutlined, HistoryOutlined, WarningOutlined } from "@ant-design/icons";

import { history } from "../mock";

interface Props{
    open:boolean;
    data:any;
    onClose:()=>void;
}

export default function WaterQualityDetailDrawer({ open, data, onClose }: Props) {
    return (
        <Drawer title={`Kết quả quan trắc - ${data?.station || ""}`} width={1000} open={open} onClose={onClose}>
            <Card>

                <Row gutter={16}>

                    <Col span={6}>
                        <Statistic title="pH" value={data?.ph} prefix={<DashboardOutlined />} />
                    </Col>

                    <Col span={6}>
                        <Statistic title="DO" value={data?.do} suffix="mg/L" />
                    </Col>

                    <Col span={6}>
                        <Statistic title="Nhiệt độ" value={data?.temperature} suffix="°C" />
                    </Col>

                    <Col span={6}>
                        <Statistic title="Độ mặn" value={data?.salinity} suffix="‰" />
                    </Col>

                </Row>

            </Card>

            <Divider titlePlacement="left">
                <EnvironmentOutlined /> Thông tin mẫu quan trắc
            </Divider>

            <Descriptions bordered column={2}>

                <Descriptions.Item label="Điểm quan trắc">
                    {data?.station}
                </Descriptions.Item>

                <Descriptions.Item label="Thời gian">
                    {data?.measureTime}
                </Descriptions.Item>

                <Descriptions.Item label="Tỉnh">
                    {data?.province}
                </Descriptions.Item>

                <Descriptions.Item label="Huyện">
                    {data?.district}
                </Descriptions.Item>

                <Descriptions.Item label="Nguồn nước">
                    {data?.waterType}
                </Descriptions.Item>

                <Descriptions.Item label="Trạng thái">

                    <Tag color={
                        data?.status === "Tốt"
                            ? "success"
                            : data?.status === "Theo dõi"
                                ? "warning"
                                : "error"
                    }>
                        {data?.status}
                    </Tag>

                </Descriptions.Item>

            </Descriptions>

            <Divider titlePlacement="left">
                <DashboardOutlined /> Chỉ số chất lượng nước
            </Divider>

            <Row gutter={16}>

                <Col span={8}>
                    <Card>
                        <Statistic title="NH3" value={data?.nh3} />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card>
                        <Statistic title="Độ đục" value={data?.turbidity} />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card>
                        <Statistic title="DO" value={data?.do} />
                    </Card>
                </Col>

            </Row>

            <Divider titlePlacement="left">
                <HistoryOutlined /> Lịch sử quan trắc
            </Divider>

            <Table
                size="small"
                rowKey="time"
                pagination={false}
                dataSource={history}
                columns={[
                    { title: "Thời gian", dataIndex: "time" },
                    { title: "pH", dataIndex: "ph" },
                    { title: "DO", dataIndex: "do" },
                    { title: "Nhiệt độ", dataIndex: "temp" },
                    { title: "Độ mặn", dataIndex: "salinity" },
                    { title: "NH3", dataIndex: "nh3" }
                ]}
            />

            <Divider titlePlacement="left">
                <WarningOutlined /> Nhật ký đánh giá
            </Divider>

            <Timeline
                items={[
                    { color: "green", children: "29/07/2026 09:30 - Chất lượng nước đạt yêu cầu" },
                    { color: "green", children: "29/07/2026 08:30 - Kết quả ổn định" },
                    { color: "orange", children: "28/07/2026 16:30 - NH3 tăng nhẹ" },
                    { color: "green", children: "28/07/2026 15:00 - Thông số bình thường" }
                ]}
            />

        </Drawer>
    )

}