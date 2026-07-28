import {
    Button,
    Card,
    Popconfirm,
    Space,
    Table,
    Tag,
} from "antd";

import type { ColumnsType } from "antd/es/table";

import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from "@ant-design/icons";

import type { Farm } from "@/types/farm";
import { useNavigate } from "react-router-dom";

interface Props {
    data: Farm[];
}

export default function FarmTable({ data }: Props) {
    const navigate = useNavigate();

    const columns: ColumnsType<Farm> = [

        {
            title: "STT",
            width: 70,
            align: "center",
            render: (_, __, index) => index + 1,
        },

        {
            title: "Mã vùng",
            dataIndex: "code",
            sorter: (a, b) => a.code.localeCompare(b.code),
        },

        {
            title: "Tên vùng nuôi",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
        },

        {
            title: "Địa bàn",
            dataIndex: "district",
        },

        {
            title: "Đối tượng",
            dataIndex: "species",
        },

        {
            title: "Diện tích (ha)",
            dataIndex: "area",
            align: "right",
            sorter: (a, b) => a.area - b.area,
        },

        {
            title: "Sản lượng (tấn)",
            dataIndex: "production",
            align: "right",
            sorter: (a, b) => a.production - b.production,
        },

        {
            title: "Trạng thái",
            dataIndex: "status",
            align: "center",
            render: (status) =>
                status === "active" ? (
                    <Tag color="success">
                        Đang hoạt động
                    </Tag>
                ) : (
                    <Tag color="error">
                        Ngừng hoạt động
                    </Tag>
                ),
        },

        {
            title: "Thao tác",
            align: "center",
            width: 150,

            render: (_, record) => (

                <Space>

                    <Button
                        size="small"
                        type="text"
                        icon={<EyeOutlined />}
                        // onClick={() => {
                        //     console.log("View", record);
                        // }}
                        onClick={() => navigate(`/farm/${record.id}`)}
                    />

                    <Button
                        size="small"
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => {
                            console.log("Edit", record);
                        }}
                    />

                    <Popconfirm
                        title="Xóa vùng nuôi?"
                    >
                        <Button
                            danger
                            size="small"
                            type="text"
                            icon={<DeleteOutlined />}
                        />
                    </Popconfirm>

                </Space>

            ),
        },

    ];

    return (

        <Card style={{ marginTop: 16 }}>

            <Table<Farm>

                rowKey="id"

                columns={columns}

                dataSource={data}

                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "50"],
                    showTotal: total => `Tổng ${total} vùng nuôi`,
                }}

                bordered

            />

        </Card>

    );
}