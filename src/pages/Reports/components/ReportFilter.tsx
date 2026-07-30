import {
    Button,
    Card,
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    Space
} from "antd";

import {
    SearchOutlined,
    ReloadOutlined,
    FileExcelOutlined,
    FilePdfOutlined
} from "@ant-design/icons";

const { RangePicker } = DatePicker;
export interface ReportFilterValue {

    year?: number;

    quarter?: number;

    month?: number;

    province?: string;

    reportType?: string;

    keyword?: string;

    dateRange?: any;

}

interface Props {

    loading?: boolean;

    onSearch: (values: ReportFilterValue) => void;

    onReset: () => void;

    onExportExcel?: () => void;

    onExportPDF?: () => void;

}
export default function ReportFilter({

    loading,

    onSearch,

    onReset,

    onExportExcel,

    onExportPDF

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
            style={{
                marginBottom: 16
            }}
        >

            <Form

                form={form}

                layout="vertical"

            >

                <Row gutter={16}>
                    <Col xs={24} md={12} lg={4}>

                        <Form.Item

                            label="Năm"

                            name="year"

                        >

                            <Select

                                allowClear

                                placeholder="Năm"

                                options={[

                                    { label: "2026", value: 2026 },

                                    { label: "2025", value: 2025 },

                                    { label: "2024", value: 2024 }

                                ]}

                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={4}>

                        <Form.Item

                            label="Quý"

                            name="quarter"

                        >

                            <Select

                                allowClear

                                placeholder="Quý"

                                options={[

                                    { label: "Quý I", value: 1 },

                                    { label: "Quý II", value: 2 },

                                    { label: "Quý III", value: 3 },

                                    { label: "Quý IV", value: 4 }

                                ]}

                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={4}>

                        <Form.Item

                            label="Tháng"

                            name="month"

                        >

                            <Select

                                allowClear

                                placeholder="Tháng"

                                options={Array.from({ length: 12 }, (_, i) => ({

                                    label: `Tháng ${i + 1}`,

                                    value: i + 1

                                }))}

                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={4}>

                        <Form.Item

                            label="Tỉnh"

                            name="province"

                        >

                            <Select

                                allowClear

                                placeholder="Tỉnh"

                                options={[

                                    {
                                        label: "Cà Mau",
                                        value: "Cà Mau"
                                    },

                                    {
                                        label: "Kiên Giang",
                                        value: "Kiên Giang"
                                    },

                                    {
                                        label: "Sóc Trăng",
                                        value: "Sóc Trăng"
                                    }

                                ]}

                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={4}>

                        <Form.Item

                            label="Loại báo cáo"

                            name="reportType"

                        >

                            <Select

                                allowClear

                                placeholder="Loại"

                                options={[

                                    {
                                        label: "Sản lượng",
                                        value: "production"
                                    },

                                    {
                                        label: "Chất lượng nước",
                                        value: "water"
                                    },

                                    {
                                        label: "Cảnh báo",
                                        value: "warning"
                                    },

                                    {
                                        label: "IUU",
                                        value: "iuu"
                                    }

                                ]}

                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={6}>

                        <Form.Item
                            label="Khoảng thời gian"
                            name="dateRange"
                        >

                            <RangePicker
                                style={{ width: "100%" }}
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} md={12} lg={6}>

                        <Form.Item
                            label="Từ khóa"
                            name="keyword"
                        >

                            <Input
                                allowClear
                                placeholder="Tên báo cáo..."
                            />

                        </Form.Item>

                    </Col>
                    <Col xs={24} lg={12}>

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
                                    icon={<FileExcelOutlined />}
                                    onClick={onExportExcel}
                                >
                                    Excel
                                </Button>

                                <Button
                                    icon={<FilePdfOutlined />}
                                    onClick={onExportPDF}
                                >
                                    PDF
                                </Button>

                            </Space>

                        </Form.Item>

                    </Col>
                </Row>

            </Form>

        </Card>

    );

}