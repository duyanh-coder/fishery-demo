import { Button, Card, Col, Descriptions, Divider, Drawer, Row, Space, Statistic, Table, Tag, Timeline } from "antd";
import { EnvironmentOutlined, ClusterOutlined, DashboardOutlined, HistoryOutlined } from "@ant-design/icons";

interface Props {
    open: boolean;
    station: any;
    onClose: () => void;
}

export default function StationDetailDrawer({ open, station, onClose }: Props) {

    const history = [
        { time: "29/07/2026 08:45", ph: 7.2, do: 6.8, temp: 28, salinity: 15 },
        { time: "29/07/2026 07:30", ph: 7.1, do: 6.7, temp: 28, salinity: 15 },
        { time: "28/07/2026 17:00", ph: 7.3, do: 6.9, temp: 29, salinity: 16 },
        { time: "28/07/2026 14:30", ph: 7.2, do: 6.8, temp: 28, salinity: 15 }
    ];

    return (
        <Drawer title={`Chi tiết điểm quan trắc - ${station?.name || ""}`} width={900} open={open} onClose={onClose}>

            <Card>
                <Row gutter={16}>
                    <Col span={8}><Statistic title="pH" value={7.2} /></Col>
                    <Col span={8}><Statistic title="DO" value={6.8} suffix="mg/L" /></Col>
                    <Col span={8}><Statistic title="Nhiệt độ" value={28} suffix="°C" /></Col>
                </Row>
            </Card>

            <Divider titlePlacement="start"><EnvironmentOutlined /> Thông tin chung</Divider>

            <Descriptions bordered column={2}>
                <Descriptions.Item label="Mã">{station?.code}</Descriptions.Item>
                <Descriptions.Item label="Tên">{station?.name}</Descriptions.Item>
                <Descriptions.Item label="Tỉnh/TP">{station?.province}</Descriptions.Item>
                <Descriptions.Item label="Phường/Xã">{station?.ward}</Descriptions.Item>
                <Descriptions.Item label="Nguồn nước">{station?.waterType}</Descriptions.Item>
                <Descriptions.Item label="Thiết bị">{station?.device}</Descriptions.Item>
                <Descriptions.Item label="Tọa độ">{station?.latitude}, {station?.longitude}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái">
                    <Tag color={station?.status === "Hoạt động" ? "success" : station?.status === "Bảo trì" ? "warning" : "error"}>
                        {station?.status}
                    </Tag>
                </Descriptions.Item>
            </Descriptions>

            <Divider titlePlacement="start"><ClusterOutlined /> Thiết bị</Divider>

            <Descriptions bordered column={2}>
                <Descriptions.Item label="Model">YSI EXO2</Descriptions.Item>
                <Descriptions.Item label="Serial">EXO-20260001</Descriptions.Item>
                <Descriptions.Item label="Firmware">v2.1.3</Descriptions.Item>
                <Descriptions.Item label="Pin">92%</Descriptions.Item>
                <Descriptions.Item label="RSSI">-65 dBm</Descriptions.Item>
                <Descriptions.Item label="Đồng bộ cuối">{station?.lastSync}</Descriptions.Item>
            </Descriptions>

            <Divider titlePlacement="start"><DashboardOutlined /> Lịch sử quan trắc</Divider>

            <Table
                size="small"
                pagination={false}
                rowKey="time"
                dataSource={history}
                columns={[
                    { title: "Thời gian", dataIndex: "time" },
                    { title: "pH", dataIndex: "ph" },
                    { title: "DO", dataIndex: "do" },
                    { title: "Nhiệt độ", dataIndex: "temp", render: v => `${v} °C` },
                    { title: "Độ mặn", dataIndex: "salinity", render: v => `${v} ‰` }
                ]}
            />

            <Divider titlePlacement="start"><HistoryOutlined /> Lịch sử sự kiện</Divider>

            <Timeline
                items={[
                    { color: "green", children: "29/07/2026 08:45 - Đồng bộ dữ liệu thành công" },
                    { color: "blue", children: "29/07/2026 08:00 - Thiết bị khởi động" },
                    { color: "orange", children: "28/07/2026 17:10 - Chuyển trạng thái bảo trì" },
                    { color: "green", children: "28/07/2026 15:20 - Hoàn tất bảo trì" }
                ]}
            />

        </Drawer>
    );

}