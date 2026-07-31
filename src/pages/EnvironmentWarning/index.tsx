import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tabs,
  Tag,
} from "antd";
import {
  CheckCircleOutlined,
  DashboardOutlined,
  DownloadOutlined,
  EyeOutlined,
  ReloadOutlined,
  WarningOutlined,
  FireOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import { environmentWarnings } from "./mock";
import WarningDetailDrawer from "./components/WarningDetailDrawer";
import { statisticCard } from "@/theme/statistic";
import {
  panelHeaderStyle,
  panelHeaderStyleSecondary,
  panelHeaderStyleSuccess,
  panelStyle,
} from "@/theme/panel";

const { Search } = Input;
const { RangePicker } = DatePicker;

export default function EnvironmentWarningPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(environmentWarnings);
  const [selected, setSelected] = useState<any>(null);
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(environmentWarnings);
      setLoading(false);
    }, 300);
  }, []);

  const kpis = [
    {
      title: "Tổng cảnh báo",
      value: 152,
      icon: <DashboardOutlined />,
    },
    {
      title: "Khẩn cấp",
      value: 8,
      icon: <FireOutlined />,
    },
    {
      title: "Đang xử lý",
      value: 27,
      icon: <WarningOutlined />,
    },
    {
      title: "Đã xử lý",
      value: 117,
      icon: <CheckCircleOutlined />,
    },
  ];

  const toolbar = (
    <Card style={{ ...panelStyle, marginBottom: 16 }}>
      <Row justify="space-between">
        <Space wrap>
          <Select style={{ width: 180 }} placeholder="Loại cảnh báo" />

          <Select style={{ width: 160 }} placeholder="Mức độ" />

          <Select style={{ width: 170 }} placeholder="Trạng thái" />

          <RangePicker />

          <Search style={{ width: 260 }} placeholder="Tìm kiếm..." />
        </Space>

        <Space>
          <Button icon={<ReloadOutlined />}>Làm mới</Button>

          <Button icon={<DownloadOutlined />}>Export</Button>
        </Space>
      </Row>
    </Card>
  );

  const columns: any = [
    {
      title: "Trạm quan trắc",
      dataIndex: "station",
      width: 180,
    },
    {
      title: "Tỉnh/TP",
      dataIndex: "province",
      width: 120,
    },
    {
      title: "Thời gian",
      dataIndex: "warningTime",
      width: 170,
    },
    {
      title: "Loại cảnh báo",
      dataIndex: "warningType",
      width: 180,
    },
    {
      title: "Thông số",
      dataIndex: "parameter",
      align: "center",
      width: 100,
    },
    {
      title: "Giá trị",
      dataIndex: "value",
      align: "center",
      width: 100,
    },
    {
      title: "Ngưỡng",
      dataIndex: "threshold",
      align: "center",
      width: 100,
    },
    {
      title: "Mức độ",
      dataIndex: "level",
      align: "center",
      width: 120,
      render: (value: string) => {
        switch (value) {
          case "Thấp":
            return <Badge status="processing" text="Thấp" />;
          case "Trung bình":
            return <Badge status="warning" text="Trung bình" />;
          case "Cao":
            return <Badge status="error" text="Cao" />;
          default:
            return <Badge status="error" text="Khẩn cấp" />;
        }
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      width: 130,
      render: (value: string) => {
        switch (value) {
          case "Đã xử lý":
            return <Tag color="success">Đã xử lý</Tag>;
          case "Đang xử lý":
            return <Tag color="warning">Đang xử lý</Tag>;
          default:
            return <Tag color="error">Chưa xử lý</Tag>;
        }
      },
    },
    {
      title: "",
      width: 120,
      fixed: "right",
      render: (_: any, row: any) => (
        <Space>
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelected(row);
              setOpenDetail(true);
            }}
          />

          <Button type="text" icon={<DownloadOutlined />} />
        </Space>
      ),
    },
  ];

  const tabList = (
    <Card style={panelStyle}>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (t) => `Tổng ${t} cảnh báo`,
        }}
      />
    </Card>
  );

  const tabChart = (
    <Row gutter={16}>
      <Col span={12}>
        <Card {...panelHeaderStyle} style={panelStyle} title="Theo mức độ">
          <ReactECharts
            style={{ height: 360 }}
            option={{
              tooltip: {},
              legend: { bottom: 0 },
              series: [
                {
                  type: "pie",
                  radius: ["45%", "70%"],
                  data: [
                    { name: "Thấp", value: 32 },
                    { name: "Trung bình", value: 61 },
                    { name: "Cao", value: 51 },
                    { name: "Khẩn cấp", value: 8 },
                  ],
                },
              ],
            }}
          />
        </Card>
      </Col>

      <Col span={12}>
        <Card
          {...panelHeaderStyleSecondary}
          style={panelStyle}
          title="Theo trạng thái"
        >
          <ReactECharts
            style={{ height: 360 }}
            option={{
              tooltip: {},
              xAxis: {
                type: "category",
                data: ["Chưa xử lý", "Đang xử lý", "Đã xử lý"],
              },
              yAxis: {
                type: "value",
              },
              series: [
                {
                  type: "bar",
                  data: [18, 27, 117],
                },
              ],
            }}
          />
        </Card>
      </Col>
    </Row>
  );

  const tabStatistic = (
    <Card
      {...panelHeaderStyleSuccess}
      style={panelStyle}
      title="Top thông số phát sinh cảnh báo"
    >
      <ReactECharts
        style={{ height: 420 }}
        option={{
          tooltip: { trigger: "axis" },
          xAxis: {
            type: "category",
            data: ["NH3", "DO", "pH", "Độ mặn", "Độ đục"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              type: "bar",
              data: [42, 38, 26, 21, 18],
            },
          ],
        }}
      />
    </Card>
  );

  return (
    <Space orientation="vertical" size={16} style={{ width: "100%" }}>
      <Row gutter={16}>
        {kpis.map((item, index) => (
          <Col span={6} key={index}>
            <Card style={statisticCard}>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.icon}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {toolbar}

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Danh sách",
            children: tabList,
          },
          {
            key: "2",
            label: "Biểu đồ",
            children: tabChart,
          },
          {
            key: "3",
            label: "Thống kê",
            children: tabStatistic,
          },
        ]}
      />

      <WarningDetailDrawer
        open={openDetail}
        data={selected}
        onClose={() => setOpenDetail(false)}
      />
    </Space>
  );
}
