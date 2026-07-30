import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import {
    ClearOutlined,
    DownloadOutlined,
    ReloadOutlined,
    SearchOutlined
} from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Search } = Input;

export interface GISFilterValue {
    province?: string;
    district?: string;
    status?: string;
    warningLevel?: string;
    keyword?: string;
    dateRange?: any;
}

interface Props {
    loading?: boolean;
    onSearch: (values: GISFilterValue) => void;
    onReset: () => void;
    onExport?: () => void;
}

export default function GisFilter({
    loading,
    onSearch,
    onReset,
    onExport
}: Props) {

    const [form] = Form.useForm();
    const handleSearch = () => {

        const values = form.getFieldsValue();

        onSearch(values);

    };
    const handleReset = () => {

        form.resetFields();

        onReset();

    };
    return (

        <Card
            style={{ marginBottom: 16 }}
        >

            <Form
                form={form}
                layout="vertical"
            >

                <Row gutter={16}>
                    <Col xs={24} md={12} lg={6}>

                        <Form.Item
                            label="Tỉnh"
                            name="province"
                        >

                            <Select
                                allowClear
                                placeholder="Chọn tỉnh"
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={6}>

                        <Form.Item
                            label="Huyện"
                            name="district"
                        >

                            <Select
                                allowClear
                                placeholder="Chọn huyện"
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={6}>

                        <Form.Item
                            label="Trạng thái"
                            name="status"
                        >

                            <Select
                                allowClear
                                options={[
                                    {
                                        label: "Tốt",
                                        value: "Tốt"
                                    },
                                    {
                                        label: "Theo dõi",
                                        value: "Theo dõi"
                                    },
                                    {
                                        label: "Cảnh báo",
                                        value: "Cảnh báo"
                                    }
                                ]}
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={8}>

                        <Form.Item
                            label="Khoảng thời gian"
                            name="dateRange"
                        >

                            <RangePicker
                                style={{ width: "100%" }}
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={8}>

                        <Form.Item
                            label="Từ khóa"
                            name="keyword"
                        >

                            <Search
                                allowClear
                                placeholder="Tên điểm quan trắc..."
                                onSearch={handleSearch}
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} lg={8}>

                        <Form.Item
                            label=" "
                            colon={false}
                        >

                            <Space wrap>

                                <Button
                                    type="primary"
                                    icon={<SearchOutlined />}
                                    loading={loading}
                                    onClick={handleSearch}
                                >
                                    Tìm kiếm
                                </Button>

                                <Button
                                    icon={<ReloadOutlined />}
                                    onClick={handleReset}
                                >
                                    Làm mới
                                </Button>

                                <Button
                                    icon={<DownloadOutlined />}
                                    onClick={onExport}
                                >
                                    Xuất Excel
                                </Button>

                            </Space>

                        </Form.Item>

                    </Col>
                </Row>

            </Form>

        </Card>

    );
}