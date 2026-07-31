import {
    Card,
    Col,
    Row,
    Space,
    Statistic,
    Table,
    Tag,
    Progress,
} from "antd";

import {
    AlertOutlined,
    BugOutlined,
    SafetyOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import {
    diseaseTrend,
    diseasePie,
} from "./mock";
import { statisticCard } from "@/theme/statistic";
import { panelHeaderStyle, panelHeaderStyleSecondary, panelHeaderStyleSuccess, panelHeaderStyleWarning, panelStyle } from "@/theme/panel";

export default function DiseasePage() {

    return (

        <Space
            direction="vertical"
            size={24}
            style={{ width: "100%" }}
        >

            <Row gutter={16}>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Ca bệnh"
                            value={193}
                            prefix={<BugOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Đang xử lý"
                            value={37}
                            prefix={<AlertOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Đã khống chế"
                            value={156}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="An toàn"
                            value={96.8}
                            suffix="%"
                            prefix={<SafetyOutlined />}
                        />
                    </Card>
                </Col>

            </Row>

            <Row gutter={16}>

                <Col span={16}>

                    <Card 
                        title="Diễn biến dịch bệnh"
                        {...panelHeaderStyle}
                        style={panelStyle}
                    >

                        <ReactECharts
                            style={{ height: 350 }}
                            option={{
                                tooltip: {},
                                xAxis: {
                                    type: "category",
                                    data: diseaseTrend.map(i => i.month),
                                },
                                yAxis: {
                                    type: "value",
                                },
                                series: [
                                    {
                                        type: "line",
                                        smooth: true,
                                        areaStyle: {},
                                        data: diseaseTrend.map(i => i.value),
                                    },
                                ],
                            }}
                        />

                    </Card>

                </Col>

                <Col span={8}>

                    <Card 
                        title="Cơ cấu bệnh"
                        {...panelHeaderStyleSecondary}
                        style={panelStyle}
                    >

                        <ReactECharts
                            style={{ height: 350 }}
                            option={{
                                tooltip: {},
                                legend: {
                                    bottom: 0,
                                },
                                series: [
                                    {
                                        type: "pie",
                                        radius: "65%",
                                        data: diseasePie,
                                    },
                                ],
                            }}
                        />

                    </Card>

                </Col>

            </Row>

            <Row gutter={16}>

                <Col span={8}>

                    <Card 
                        title="Mức độ kiểm soát"
                        {...panelHeaderStyleSuccess}
                        style={panelStyle}
                    >

                        <Space
                            orientation="vertical"
                            style={{ width: "100%" }}
                        >

                            <div>
                                Hoại tử gan tụy
                                <Progress percent={92} />
                            </div>

                            <div>
                                Đốm trắng
                                <Progress
                                    percent={85}
                                    status="active"
                                />
                            </div>

                            <div>
                                Nấm
                                <Progress percent={97} />
                            </div>

                            <div>
                                Xuất huyết
                                <Progress percent={90} />
                            </div>

                        </Space>

                    </Card>

                </Col>

                <Col span={16}>

                    <Card 
                        title="Các ổ dịch gần đây"
                        {...panelHeaderStyleWarning}
                        style={panelStyle}
                    >

                        <Table

                            pagination={false}

                            rowKey="id"

                            dataSource={[

                                {
                                    id: 1,
                                    area: "Ô Môn",
                                    species: "Tôm thẻ",
                                    disease: "Đốm trắng",
                                    level: "Cao",
                                    status: "Đang xử lý",
                                },

                                {
                                    id: 2,
                                    area: "Bình Thủy",
                                    species: "Cá tra",
                                    disease: "Nấm",
                                    level: "Thấp",
                                    status: "Đã khống chế",
                                },

                                {
                                    id: 3,
                                    area: "Cờ Đỏ",
                                    species: "Tôm sú",
                                    disease: "Hoại tử gan tụy",
                                    level: "Trung bình",
                                    status: "Theo dõi",
                                },

                            ]}

                            columns={[

                                {
                                    title: "Khu vực",
                                    dataIndex: "area",
                                },

                                {
                                    title: "Đối tượng",
                                    dataIndex: "species",
                                },

                                {
                                    title: "Dịch bệnh",
                                    dataIndex: "disease",
                                },

                                {
                                    title: "Mức độ",
                                    render: (_, r) => {

                                        const color =
                                            r.level === "Cao"
                                                ? "red"
                                                : r.level === "Trung bình"
                                                ? "orange"
                                                : "green";

                                        return (
                                            <Tag color={color}>
                                                {r.level}
                                            </Tag>
                                        );

                                    },
                                },

                                {
                                    title: "Trạng thái",
                                    render: (_, r) => {

                                        if (r.status === "Đã khống chế")
                                            return <Tag color="green">{r.status}</Tag>;

                                        if (r.status === "Đang xử lý")
                                            return <Tag color="red">{r.status}</Tag>;

                                        return <Tag color="orange">{r.status}</Tag>;

                                    },
                                },

                            ]}

                        />

                    </Card>

                </Col>

            </Row>

        </Space>

    );

}