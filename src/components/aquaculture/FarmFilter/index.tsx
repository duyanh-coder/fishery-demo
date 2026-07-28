import { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Select,
    Space,
} from "antd";

import {
    PlusOutlined,
    ReloadOutlined,
    DownloadOutlined,
    SearchOutlined,
} from "@ant-design/icons";

import type { FarmFilter as FarmFilterType } from "@/types/farm";

const { Option } = Select;

const DEFAULT_FILTER: FarmFilterType = {
    keyword: "",
    district: undefined,
    species: undefined,
    status: undefined,
};

interface Props {
    value?: FarmFilterType;

    onChange?: (value: FarmFilterType) => void;

    onReset?: () => void;

    onAdd?: () => void;

    onExport?: () => void;
}

export default function FarmFilter({
    value,
    onChange,
    onReset,
    onAdd,
    onExport,
}: Props) {
    const [filter, setFilter] = useState<FarmFilterType>(
        value ?? DEFAULT_FILTER,
    );

    useEffect(() => {
        if (value) {
            setFilter(value);
        }
    }, [value]);

    const handleChange = (next: Partial<FarmFilterType>) => {
        const updated = {
            ...filter,
            ...next,
        };
        setFilter(updated);
        onChange?.(updated);
    };

    const handleReset = () => {
        const resetValue = DEFAULT_FILTER;
        setFilter(resetValue);
        onChange?.(resetValue);
        onReset?.();
    };

    return (
        <Card style={{ marginTop: 16 }}>
            <Row gutter={[16, 16]}>

                <Col xs={24} md={8}>
                    <Input
                        value={filter.keyword}
                        onChange={(event) =>
                            handleChange({ keyword: event.target.value })
                        }
                        allowClear
                        placeholder="Nhập mã hoặc tên vùng nuôi..."
                        prefix={<SearchOutlined />}
                    />
                </Col>

                <Col xs={24} md={4}>
                    <Select
                        value={filter.district}
                        onChange={(value) =>
                            handleChange({ district: value as string })
                        }
                        style={{ width: "100%" }}
                        placeholder="Quận/Huyện"
                        allowClear
                    >
                        <Option value="Ninh Kiều">Ninh Kiều</Option>
                        <Option value="Bình Thủy">Bình Thủy</Option>
                        <Option value="Cái Răng">Cái Răng</Option>
                        <Option value="Ô Môn">Ô Môn</Option>
                        <Option value="Thốt Nốt">Thốt Nốt</Option>
                        <Option value="Phong Điền">Phong Điền</Option>
                        <Option value="Cờ Đỏ">Cờ Đỏ</Option>
                        <Option value="Vĩnh Thạnh">Vĩnh Thạnh</Option>
                        <Option value="Thới Lai">Thới Lai</Option>
                    </Select>
                </Col>

                <Col xs={24} md={4}>
                    <Select
                        value={filter.species}
                        onChange={(value) =>
                            handleChange({ species: value as string })
                        }
                        style={{ width: "100%" }}
                        placeholder="Đối tượng nuôi"
                        allowClear
                    >
                        <Option value="Cá tra">Cá tra</Option>
                        <Option value="Tôm">Tôm</Option>
                        <Option value="Cá lóc">Cá lóc</Option>
                        <Option value="Cá rô">Cá rô</Option>
                        <Option value="Cá lồng">Cá lồng</Option>
                    </Select>
                </Col>

                <Col xs={24} md={4}>
                    <Select
                        value={filter.status}
                        onChange={(value) =>
                            handleChange({ status: value as "active" | "inactive" })
                        }
                        style={{ width: "100%" }}
                        placeholder="Trạng thái"
                        allowClear
                    >
                        <Option value="active">Đang hoạt động</Option>
                        <Option value="inactive">Ngừng hoạt động</Option>
                    </Select>
                </Col>

                <Col xs={24} md={4}>
                    <Space wrap>

                        <Button
                            icon={<ReloadOutlined />}
                            onClick={handleReset}
                        >
                            Làm mới
                        </Button>

                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={onAdd}
                        >
                            Thêm
                        </Button>

                        <Button
                            icon={<DownloadOutlined />}
                            onClick={onExport}
                        >
                            Excel
                        </Button>

                    </Space>
                </Col>

            </Row>
        </Card>
    );
}