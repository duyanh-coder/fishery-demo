import { useEffect, useState } from "react";
import { Button, Card, Col, DatePicker, Input, Row, Select, Space, Statistic, Table, Tag } from "antd";
import { EnvironmentOutlined, ReloadOutlined, SearchOutlined, WarningOutlined, CheckCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { gisMarkers } from "./mock";
import StationPopup from "./components/StationPopup";

const { Search } = Input;
const { RangePicker } = DatePicker;
export default function GisPage() {
    const [loading, setLoading] = useState(false);
    const [markers, setMarkers] = useState(gisMarkers);
    const [selected, setSelected] = useState<any>(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setMarkers(gisMarkers);
            setLoading(false);
        }, 300);

    }, []);

    const kpis = [
        {
            title: "Điểm quan trắc",
            value: 126,
            icon: <DashboardOutlined />
        },
        {
            title: "Hoạt động bình thường",
            value: 108,
            icon: <CheckCircleOutlined />
        },
        {
            title: "Theo dõi",
            value: 12,
            icon: <EnvironmentOutlined />
        },
        {
            title: "Cảnh báo",
            value: 6,
            icon: <WarningOutlined />
        }
    ];

    const filterPanel = (
        <Card style={{ marginBottom: 16 }}>

            <Row justify="space-between">

                <Space wrap>

                    <Select
                        style={{ width: 180 }}
                        placeholder="Tỉnh"
                    />

                    <Select
                        style={{ width: 170 }}
                        placeholder="Trạng thái"
                    />

                    <Select
                        style={{ width: 170 }}
                        placeholder="Mức cảnh báo"
                    />

                    <RangePicker />

                    <Search
                        style={{ width: 260 }}
                        placeholder="Tên điểm quan trắc"
                        prefix={<SearchOutlined />}
                    />

                </Space>

                <Space>

                    <Button icon={<ReloadOutlined />}>
                        Làm mới
                    </Button>

                </Space>

            </Row>

        </Card>
    );

    const columns = [
        {
            title: "Điểm quan trắc",
            dataIndex: "station"
        },
        {
            title: "Tỉnh",
            dataIndex: "province"
        },
        {
            title: "Trạng thái",
            render: (_: any, row: any) => {

                switch (row.status) {

                    case "Tốt":
                        return <Tag color="success">Tốt</Tag>;

                    case "Theo dõi":
                        return <Tag color="warning">Theo dõi</Tag>;

                    default:
                        return <Tag color="error">Cảnh báo</Tag>;

                }

            }
        },
        {
            title: "Cập nhật",
            dataIndex: "lastUpdate"
        }
    ];

    const mapView = (
        <Card
            title="Bản đồ GIS"
            bodyStyle={{ padding: 0 }}
        >

            <MapContainer
                center={[10.0452, 105.7469]}
                zoom={9}
                style={{
                    height: 650,
                    width: "100%"
                }}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    markers.map(item => (
                        <Marker
                            key={item.id}
                            position={[item.lat, item.lng]}
                            eventHandlers={{
                                click: () => {
                                    setSelected(item);
                                }
                            }}
                        >

                            <Popup>

                                <StationPopup
                                    data={item}
                                />

                            </Popup>

                        </Marker>
                    ))
                }

            </MapContainer>

        </Card>
    );

    const stationTable = (
        <Card
            title="Danh sách điểm quan trắc"
        >

            <Table
                rowKey="id"
                loading={loading}
                columns={columns}
                dataSource={markers}
                pagination={{
                    pageSize: 8
                }}
                scroll={{
                    x: 1200
                }}
            />

        </Card>
    );

    return (

        <Space
            orientation="vertical"
            size={16}
            style={{ width: "100%" }}
        >

            <Row gutter={16}>

                {
                    kpis.map((item, index) => (
                        <Col
                            span={6}
                            key={index}
                        >

                            <Card>

                                <Statistic
                                    title={item.title}
                                    value={item.value}
                                    prefix={item.icon}
                                />

                            </Card>

                        </Col>
                    ))
                }

            </Row>

            {filterPanel}

            {mapView}

            {stationTable}

        </Space>

    );
}