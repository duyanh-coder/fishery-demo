import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, DatePicker, Input, Row, Select, Space, Statistic, Table, Tabs, Tag } from "antd";
import { CheckCircleOutlined, DashboardOutlined, DownloadOutlined, EnvironmentOutlined, EyeOutlined, LineChartOutlined, ReloadOutlined, WarningOutlined } from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import { waterQualitys } from "./mock";
import WaterQualityDetailDrawer from "./components/WaterQualityDetailDrawer";

const { Search } = Input;
const { RangePicker } = DatePicker;
export default function WaterQuality() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(waterQualitys);
    const [selected, setSelected] = useState<any>(null);
    const [openDetail, setOpenDetail] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(waterQualitys);
            setLoading(false);
        }, 300);
    }, []);

    const kpis = [
        {
            title: "Tổng mẫu",
            value: 1256,
            icon: <DashboardOutlined />
        },
        {
            title: "Đạt yêu cầu",
            value: 1180,
            icon: <CheckCircleOutlined />
        },
        {
            title: "Theo dõi",
            value: 52,
            icon: <EnvironmentOutlined />
        },
        {
            title: "Cảnh báo",
            value: 24,
            icon: <WarningOutlined />
        }
    ];

    const toolbar = (
        <Card style={{ marginBottom: 16 }}>
            <Row justify="space-between">

                <Space wrap>

                    <Select placeholder="Điểm quan trắc" style={{ width: 180 }} />

                    <Select placeholder="Tỉnh" style={{ width: 150 }} />

                    <Select placeholder="Nguồn nước" style={{ width: 160 }} />

                    <RangePicker />

                    <Search placeholder="Tìm kiếm..." style={{ width: 260 }} />

                </Space>

                <Space>

                    <Button icon={<ReloadOutlined />}>
                        Làm mới
                    </Button>

                    <Button icon={<DownloadOutlined />}>
                        Export
                    </Button>

                </Space>

            </Row>
        </Card>
    );

    const columns = [
        { title: "Điểm quan trắc", dataIndex: "station", width: 180 },
        { title: "Tỉnh", dataIndex: "province", width: 130 },
        { title: "Thời gian", dataIndex: "measureTime", width: 180 },
        { title: "pH", dataIndex: "ph", align: "center" },
        { title: "DO", dataIndex: "do", align: "center" },
        { title: "Nhiệt độ", dataIndex: "temperature", align: "center", render: (v: number) => `${v} °C` },
        { title: "Độ mặn", dataIndex: "salinity", align: "center", render: (v: number) => `${v} ‰` },
        { title: "NH3", dataIndex: "nh3", align: "center" },
        { title: "Độ đục", dataIndex: "turbidity", align: "center" },
        {
            title: "Trạng thái",
            width: 130,
            align: "center",
            render: (_: any, row: any) => {
                switch (row.status) {
                    case "Tốt": return <Tag color="success">Tốt</Tag>;
                    case "Theo dõi": return <Tag color="warning">Theo dõi</Tag>;
                    default: return <Tag color="error">Cảnh báo</Tag>;
                }
            }
        },
        {
            title: "",
            width: 120,
            fixed: "right",
            render: (_: any, row: any) => (
                <Space>
                    <Button type="text" icon={<EyeOutlined />} onClick={() => { setSelected(row); setOpenDetail(true); }} />
                    <Button type="text" icon={<EnvironmentOutlined />} />
                    <Button type="text" icon={<DownloadOutlined />} />
                </Space>
            )
        }
    ];

    const tabList = (
        <Table
            rowKey="id"
            loading={loading}
            columns={columns}
            dataSource={data}
            scroll={{ x: 1400 }}
            pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (t) => `Tổng ${t} bản ghi`
            }}
        />
    );

    const tabChart = (
        <Row gutter={16}>

            <Col span={12}>
                <Card title="Kết quả theo trạng thái">
                    <ReactECharts
                        style={{ height: 360 }}
                        option={{
                            tooltip: {},
                            legend: { bottom: 0 },
                            series: [{
                                type: "pie",
                                radius: ["45%", "70%"],
                                data: [
                                    { name: "Tốt", value: 1180 },
                                    { name: "Theo dõi", value: 52 },
                                    { name: "Cảnh báo", value: 24 }
                                ]
                            }]
                        }}
                    />
                </Card>
            </Col>

            <Col span={12}>
                <Card title="Giá trị pH">
                    <ReactECharts
                        style={{ height: 360 }}
                        option={{
                            tooltip: {},
                            xAxis: { type: "category", data: ["Ô Môn", "Thốt Nốt", "Phong Điền", "Long Mỹ", "Ngã Bảy"] },
                            yAxis: { type: "value", min: 5, max: 9 },
                            series: [{
                                type: "bar",
                                data: [7.2, 7.1, 6.5, 7.3, 6.8]
                            }]
                        }}
                    />
                </Card>
            </Col>

        </Row>
    );

    const tabTrend = (
        <Card title="Xu hướng pH và DO">

            <ReactECharts
                style={{ height: 420 }}
                option={{
                    tooltip: { trigger: "axis" },
                    legend: {},
                    xAxis: { type: "category", data: ["23/07", "24/07", "25/07", "26/07", "27/07", "28/07", "29/07"] },
                    yAxis: [
                        { type: "value", name: "pH", min: 6, max: 8 },
                        { type: "value", name: "DO", min: 4, max: 8 }
                    ],
                    series: [
                        { name: "pH", type: "line", smooth: true, data: [7.0, 7.1, 7.2, 7.1, 7.2, 7.3, 7.2] },
                        { name: "DO", type: "line", smooth: true, yAxisIndex: 1, data: [6.2, 6.4, 6.5, 6.6, 6.7, 6.8, 6.8] }
                    ]
                }}
            />

        </Card>
    );

    return (
        <Space orientation="vertical" size={16} style={{ width: "100%" }}>

            <Row gutter={16}>
                {kpis.map((item, index) => (
                    <Col span={6} key={index}>
                        <Card>
                            <Statistic title={item.title} value={item.value} prefix={item.icon} />
                        </Card>
                    </Col>
                ))}
            </Row>

            {toolbar}

            <Tabs
                defaultActiveKey="1"
                items={[
                    { key: "1", label: "Danh sách", children: tabList },
                    { key: "2", label: "Biểu đồ", children: tabChart },
                    { key: "3", label: "Xu hướng", children: tabTrend }
                ]}
            />

            <WaterQualityDetailDrawer
                open={openDetail}
                data={selected}
                onClose={() => setOpenDetail(false)}
            />

        </Space>
    );
}