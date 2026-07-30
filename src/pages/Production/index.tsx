import {
    Card,
    Col,
    Row,
    Space,
    Statistic,
    Table,
    Tag,
} from "antd";

import {
    RiseOutlined,
    DatabaseOutlined,
    TrophyOutlined,
    LineChartOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import {
    monthlyProduction,
    speciesProduction,
} from "./mock";

export default function ProductionPage() {

    return (

        <Space
            direction="vertical"
            size={24}
            style={{ width: "100%" }}
        >

            <Row gutter={16}>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Tổng sản lượng"
                            value={38215}
                            suffix="tấn"
                            prefix={<DatabaseOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Tăng trưởng"
                            value={18.2}
                            suffix="%"
                            prefix={<RiseOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Sản lượng tháng"
                            value={3910}
                            suffix="tấn"
                            prefix={<LineChartOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Đạt kế hoạch"
                            value={96.5}
                            suffix="%"
                            prefix={<TrophyOutlined />}
                        />
                    </Card>
                </Col>

            </Row>

            <Row gutter={16}>

                <Col span={16}>

                    <Card title="Sản lượng theo tháng">

                        <ReactECharts
                            style={{ height: 360 }}
                            option={{
                                tooltip: {},
                                xAxis: {
                                    type: "category",
                                    data: monthlyProduction.map(i => i.month),
                                },
                                yAxis: {
                                    type: "value",
                                },
                                series: [
                                    {
                                        type: "line",
                                        smooth: true,
                                        areaStyle: {},
                                        data: monthlyProduction.map(i => i.value),
                                    },
                                ],
                            }}
                        />

                    </Card>

                </Col>

                <Col span={8}>

                    <Card title="Cơ cấu sản lượng">

                        <ReactECharts
                            style={{ height: 360 }}
                            option={{
                                tooltip: {},
                                legend: {
                                    bottom: 0,
                                },
                                series: [
                                    {
                                        type: "pie",
                                        radius: "65%",
                                        data: speciesProduction,
                                    },
                                ],
                            }}
                        />

                    </Card>

                </Col>

            </Row>

            <Card title="Top vùng nuôi">

                <Table

                    pagination={false}

                    rowKey="name"

                    dataSource={[
                        {
                            name: "Vùng nuôi Bình Thủy",
                            species: "Cá tra",
                            production: 5120,
                            status: "Đạt",
                        },
                        {
                            name: "Vùng nuôi Ô Môn",
                            species: "Tôm thẻ",
                            production: 4360,
                            status: "Đạt",
                        },
                        {
                            name: "Vùng nuôi Cờ Đỏ",
                            species: "Cá rô phi",
                            production: 3250,
                            status: "Khuyến nghị",
                        },
                    ]}

                    columns={[
                        {
                            title: "Vùng nuôi",
                            dataIndex: "name",
                        },
                        {
                            title: "Đối tượng",
                            dataIndex: "species",
                        },
                        {
                            title: "Sản lượng",
                            render: (_, r) => `${r.production} tấn`,
                        },
                        {
                            title: "Trạng thái",
                            render: (_, r) =>
                                r.status === "Đạt"
                                    ? <Tag color="green">Đạt</Tag>
                                    : <Tag color="orange">Khuyến nghị</Tag>,
                        },
                    ]}

                />

            </Card>

        </Space>

    );

}