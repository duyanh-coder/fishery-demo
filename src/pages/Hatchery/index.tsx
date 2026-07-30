import { useNavigate } from "react-router-dom";

import {
    Card,
    Col,
    Input,
    Row,
    Select,
    Space,
    Statistic,
    Table,
    Tag,
    Button,
} from "antd";

import {
    ShopOutlined,
    CiOutlined,
    CheckCircleOutlined,
    EyeOutlined,
} from "@ant-design/icons";

import { getHatcheryList } from "./service";

export default function HatcheryList() {

    const navigate = useNavigate();

    const data = getHatcheryList();

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
                            title="Cơ sở giống"
                            value={128}
                            prefix={<ShopOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Công suất (triệu con)"
                            value={326}
                            prefix={<CiOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Đạt chuẩn"
                            value={98.5}
                            suffix="%"
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Đang hoạt động"
                            value={116}
                        />
                    </Card>
                </Col>

            </Row>

            <Card>

                <Row gutter={16}>

                    <Col span={8}>
                        <Input placeholder="Tên cơ sở..." />
                    </Col>

                    <Col span={6}>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Quận/Huyện"
                        />
                    </Col>

                    <Col span={6}>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Loài"
                        />
                    </Col>

                </Row>

            </Card>

            <Card>

                <Table

                    rowKey="id"

                    dataSource={data}

                    pagination={{
                        pageSize: 10,
                    }}

                    columns={[

                        {
                            title: "Mã",
                            dataIndex: "code",
                        },

                        {
                            title: "Tên cơ sở",
                            dataIndex: "name",
                        },

                        {
                            title: "Chủ cơ sở",
                            dataIndex: "owner",
                        },

                        {
                            title: "Loài",
                            dataIndex: "species",
                        },

                        {
                            title: "Công suất",
                            render: (_, r) =>
                                `${r.capacity} triệu`,
                        },

                        {
                            title: "Trạng thái",
                            render: (_, r) => {

                                if (r.status === "ACTIVE")
                                    return <Tag color="green">Hoạt động</Tag>;

                                if (r.status === "WARNING")
                                    return <Tag color="orange">Cảnh báo</Tag>;

                                return <Tag color="red">Tạm ngưng</Tag>;

                            }
                        },

                        {
                            title: "",

                            width: 100,

                            render: (_, r) => (

                                <Button
                                    type="primary"
                                    icon={<EyeOutlined />}
                                    onClick={() =>
                                        navigate(`/hatchery/${r.id}`)
                                    }
                                >
                                    Chi tiết
                                </Button>

                            )

                        }

                    ]}

                />

            </Card>

        </Space>
    );

}