import {
  Badge,
  Button,
  Card,
  Col,
  Input,
  Progress,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tabs,
  Tag,
  Timeline,
} from "antd";
import {
  CheckCircleOutlined,
  DisconnectOutlined,
  DownloadOutlined,
  EditOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  MoreOutlined,
  PlusOutlined,
  ReloadOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import StationDetailDrawer from "./components/StationDetailDrawer";

import { stations } from "./mock";
import { useState } from "react";
import { statisticCard } from "@/theme/statistic";
import {
  panelHeaderStyle,
  panelHeaderStyleInfo,
  panelHeaderStyleSecondary,
  panelStyle,
} from "@/theme/panel";

const { Search } = Input;

export default function StationPage() {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const columns = [
    { title: "Mã", dataIndex: "code" },
    { title: "Điểm quan trắc", dataIndex: "name" },
    {
      title: "Địa phương",
      render: (_: any, r: any) => `${r.ward}, ${r.province}`,
    },
    { title: "Nguồn nước", dataIndex: "waterType" },
    { title: "Thiết bị", dataIndex: "device" },
    { title: "Lần đồng bộ", dataIndex: "lastSync" },
    {
      title: "Trạng thái",
      render: (_: any, r: any) => {
        switch (r.status) {
          case "Hoạt động":
            return <Tag color="success">Hoạt động</Tag>;
          case "Bảo trì":
            return <Tag color="warning">Bảo trì</Tag>;
          default:
            return <Tag color="error">Mất kết nối</Tag>;
        }
      },
    },
    {
      title: "Thao tác",
      width: 160,
      render: (_: any, row: any) => (
        <Space>
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedStation(row);
              setOpenDetail(true);
            }}
          />
          <Button type="text" icon={<EnvironmentOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<MoreOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Space orientation="vertical" size={20} style={{ width: "100%" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Tổng điểm"
              value={180}
              prefix={<EnvironmentOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Hoạt động"
              value={172}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic title="Bảo trì" value={5} prefix={<ToolOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Mất kết nối"
              value={3}
              prefix={<DisconnectOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card>
        <Row justify="space-between">
          <Space wrap>
            <Select placeholder="Tỉnh/TP" style={{ width: 150 }} />
            <Select placeholder="Phường/Xã" style={{ width: 150 }} />
            <Select placeholder="Nguồn nước" style={{ width: 160 }} />
            <Select placeholder="Trạng thái" style={{ width: 160 }} />
            <Search
              placeholder="Tìm điểm quan trắc..."
              style={{ width: 300 }}
            />
          </Space>

          <Space>
            <Button icon={<ReloadOutlined />}>Làm mới</Button>
            <Button icon={<DownloadOutlined />}>Export</Button>
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm mới
            </Button>
          </Space>
        </Row>
      </Card>

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Danh sách",
            children: (
              <Card style={panelStyle}>
                <Table
                  rowKey="id"
                  columns={columns}
                  dataSource={stations}
                  pagination={{ pageSize: 10 }}
                />
              </Card>
            ),
          },

          {
            key: "2",
            label: "Bản đồ",
            children: (
              <div
                style={{
                  ...panelStyle,
                  height: 650,
                  padding: 16,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #d9d9d9",
                    borderRadius: 8,
                    background: "#eaf4ff",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 80,
                      top: 80,
                      width: 850,
                      height: 220,
                      background: "#7ec8ff",
                      borderRadius: 200,
                      opacity: 0.35,
                      transform: "rotate(-10deg)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: 120,
                      top: 120,
                      textAlign: "center",
                    }}
                  >
                    <Button type="primary" shape="circle">
                      1
                    </Button>
                    <div>Ô Môn</div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: 320,
                      top: 260,
                      textAlign: "center",
                    }}
                  >
                    <Button type="primary" shape="circle">
                      2
                    </Button>
                    <div>Thốt Nốt</div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: 560,
                      top: 180,
                      textAlign: "center",
                    }}
                  >
                    <Button danger shape="circle">
                      3
                    </Button>
                    <div>Phong Điền</div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: 760,
                      top: 320,
                      textAlign: "center",
                    }}
                  >
                    <Button shape="circle">4</Button>
                    <div>Ngã Bảy</div>
                  </div>

                  <Card
                    size="small"
                    title="Chú thích"
                    style={{
                      position: "absolute",
                      right: 16,
                      top: 16,
                      width: 180,
                    }}
                  >
                    <div>🟢 Hoạt động</div>
                    <div>🟠 Bảo trì</div>
                    <div>🔴 Mất kết nối</div>
                  </Card>
                </div>
              </div>
            ),
          },
          {
            key: "3",
            label: "Thiết bị",
            children: (
              <Card style={panelStyle}>
                <Table
                  rowKey="id"
                  pagination={false}
                  dataSource={stations}
                  columns={[
                    { title: "Thiết bị", dataIndex: "device" },
                    { title: "Điểm", dataIndex: "name" },
                    { title: "Firmware", render: () => "v2.1.3" },
                    {
                      title: "Pin",
                      render: () => <Progress percent={92} size="small" />,
                    },
                    {
                      title: "Tín hiệu",
                      render: () => <Progress percent={81} size="small" />,
                    },
                    {
                      title: "Kết nối",
                      render: () => <Badge status="success" text="Online" />,
                    },
                  ]}
                />
              </Card>
            ),
          },
          {
            key: "4",
            label: "Thống kê",
            children: (
              <Row gutter={16}>
                <Col span={12}>
                  <Card
                    {...panelHeaderStyle}
                    style={panelStyle}
                    title="Theo tỉnh/TP"
                  >
                    <ReactECharts
                      style={{ height: 350 }}
                      option={{
                        tooltip: {},
                        xAxis: {
                          type: "category",
                          data: [
                            "Cần Thơ",
                            "Hậu Giang",
                            "Sóc Trăng",
                            "Bạc Liêu",
                          ],
                        },
                        yAxis: { type: "value" },
                        series: [{ type: "bar", data: [62, 48, 35, 37] }],
                      }}
                    />
                  </Card>
                </Col>

                <Col span={12}>
                  <Card
                    {...panelHeaderStyleSecondary}
                    style={panelStyle}
                    title="Theo nguồn nước"
                  >
                    <ReactECharts
                      style={{ height: 350 }}
                      option={{
                        tooltip: {},
                        series: [
                          {
                            type: "pie",
                            radius: "65%",
                            data: [
                              { name: "Sông", value: 82 },
                              { name: "Kênh", value: 41 },
                              { name: "Ao", value: 36 },
                              { name: "Biển", value: 21 },
                            ],
                          },
                        ],
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            ),
          },
          {
            key: "5",
            label: "Lịch sử",
            children: (
              <Card
                {...panelHeaderStyleInfo}
                style={panelStyle}
                title="Lịch sử hoạt động"
              >
                <Timeline
                  items={[
                    {
                      color: "green",
                      children: "09:30 - Ô Môn 01 đồng bộ dữ liệu",
                    },

                    {
                      color: "red",
                      children: "09:12 - Phong Điền mất kết nối",
                    },

                    {
                      color: "blue",
                      children: "08:45 - Long Mỹ cập nhật Firmware",
                    },

                    {
                      color: "orange",
                      children: "08:20 - Ngã Bảy chuyển sang bảo trì",
                    },

                    {
                      color: "green",
                      children: "08:00 - Thốt Nốt hoàn thành đồng bộ",
                    },
                  ]}
                />
              </Card>
            ),
          },
        ]}
      />
      <StationDetailDrawer
        open={openDetail}
        station={selectedStation}
        onClose={() => setOpenDetail(false)}
      />
    </Space>
  );
}
