import { useEffect, useState } from "react";

import {
    Card,
    Col,
    Row,
    Space,
    Table,
    Tag
} from "antd";

import type { ColumnsType } from "antd/es/table";

import ReportStatistic from "../components/ReportStatistic";
import ReportFilter, {
    type ReportFilterValue
} from "../components/ReportFilter";
import ProductionChart from "../components/ProductionChart";

import { getProductionReport } from "./service";

import type {
    ProductionSummary,
    ProductionTrend,
    ProvinceProduction,
    ProductionTable
} from "./types";
export default function ProductionReport() {
    const [loading, setLoading] = useState(false);

    const [summary, setSummary] = useState<ProductionSummary>();

    const [trend, setTrend] = useState<ProductionTrend[]>([]);

    const [provinceData, setProvinceData] = useState<ProvinceProduction[]>([]);

    const [tableData, setTableData] = useState<ProductionTable[]>([]);

    const loadData = async () => {

        setLoading(true);

        try {

            const res = await getProductionReport();

            setSummary(res.summary);

            setTrend(res.trend);

            setProvinceData(res.provinceData);

            setTableData(res.tableData);

        } finally {

            setLoading(false);

        }

    };
    useEffect(() => {

        loadData();

    }, []);

    const handleSearch = (values: ReportFilterValue) => {

        console.log(values);

    };
    const handleReset = () => {

        loadData();

    };
    const handleExportExcel = () => {

        console.log("Export Excel");

    };
    const handleExportPDF = () => {

        console.log("Export PDF");

    };
    const columns: ColumnsType<ProductionTable> = [

        {

            title: "Tỉnh",

            dataIndex: "province"

        },

        {

            title: "Huyện",

            dataIndex: "district"

        },

        {

            title: "Đối tượng",

            dataIndex: "species"

        },

        {

            title: "Diện tích (ha)",

            dataIndex: "area",

            align: "right"

        },

        {

            title: "Sản lượng (tấn)",

            dataIndex: "production",

            align: "right"

        },

        {

            title: "Ngày thu hoạch",

            dataIndex: "harvestDate"

        }

    ];
    return (

        <Space

            direction="vertical"

            size={16}

            style={{ width: "100%" }}

        >

            <ReportStatistic

                data={{

                    totalReports: summary?.totalProduction ?? 0,

                    productionReports: summary?.totalFarm ?? 0,

                    waterReports: summary?.averageProduction ?? 0,

                    warningReports: summary?.growthRate ?? 0

                }}

            />

            <ReportFilter

                loading={loading}

                onSearch={handleSearch}

                onReset={handleReset}

                onExportExcel={handleExportExcel}

                onExportPDF={handleExportPDF}

            />

            <Row gutter={16}>

                <Col span={24}>

                    <ProductionChart

                        data={trend.map(item => ({

                            month: item.month,

                            production: item.production

                        }))}

                        loading={loading}

                    />

                </Col>

            </Row>

            <Card title="Sản lượng theo địa phương">

                <Table

                    rowKey="id"

                    columns={[

                        {

                            title: "Tỉnh",

                            dataIndex: "province"

                        },

                        {

                            title: "Tôm",

                            dataIndex: "shrimp",

                            align: "right"

                        },

                        {

                            title: "Cá",

                            dataIndex: "fish",

                            align: "right"

                        },

                        {

                            title: "Nhuyễn thể",

                            dataIndex: "mollusk",

                            align: "right"

                        },

                        {

                            title: "Tổng",

                            dataIndex: "total",

                            align: "right",

                            render: (v: number) =>

                                <Tag color="green">

                                    {v.toLocaleString()}

                                </Tag>

                        }

                    ]}

                    dataSource={provinceData}

                    pagination={false}

                />

            </Card>

            <Card title="Chi tiết sản lượng">

                <Table

                    rowKey="id"

                    columns={columns}

                    dataSource={tableData}

                />

            </Card>

        </Space>

    );
}