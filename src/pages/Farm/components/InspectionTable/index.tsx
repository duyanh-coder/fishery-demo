import { Card, Table, Tag } from "antd";

import type { ColumnsType } from "antd/es/table";

import type { Inspection } from "../../types";

interface Props {
    data: Inspection[];
}

export default function InspectionTable({
    data,
}: Props) {

    const columns: ColumnsType<Inspection> = [

        {
            title: "Ngày",
            dataIndex: "date",
        },

        {
            title: "Đơn vị",
            dataIndex: "agency",
        },

        {
            title: "Nội dung",
            dataIndex: "content",
        },

        {
            title: "Kết quả",
            dataIndex: "result",
            render: (value) => (
                <Tag color="success">
                    {value}
                </Tag>
            ),
        },

    ];

    return (

        <Card title="Lịch sử kiểm tra">

            <Table
                rowKey="id"
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
            />

        </Card>

    );

}