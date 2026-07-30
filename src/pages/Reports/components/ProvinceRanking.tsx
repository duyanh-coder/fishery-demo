import {
    Card,
    Table,
    Tag
} from "antd";

import type { ColumnsType } from "antd/es/table";

import type { ProvinceRankingItem } from "../Dashboard/types";

interface Props {

    data: ProvinceRankingItem[];

    loading?: boolean;

}

export default function ProvinceRanking({

    data,

    loading

}: Props) {
    const columns: ColumnsType<ProvinceRankingItem> = [

        {

            title: "TOP",

            dataIndex: "id",

            width: 70,

            align: "center"

        },

        {

            title: "Tỉnh",

            dataIndex: "province"

        },

        {

            title: "Sản lượng (Tấn)",

            dataIndex: "production",

            align: "right",

            render: (value: number) => value.toLocaleString()

        },

        {

            title: "Cảnh báo",

            dataIndex: "warning",

            align: "center"

        },

        {

            title: "Điểm",

            dataIndex: "score",

            align: "center",

            render: (value: number) => (

                <Tag color="green">

                    {value}

                </Tag>

            )

        }

    ];
    return (

        <Card

            loading={loading}

            title="Top địa phương"

        >

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

