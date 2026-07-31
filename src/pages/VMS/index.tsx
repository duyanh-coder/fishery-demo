import { Card, Col, Progress, Row, Space, Statistic, Table, Tag } from "antd";

import {
  CheckCircleOutlined,
  DisconnectOutlined,
  RadarChartOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import { dashboard, trend, status, warnings } from "./mock";
import { statisticCard } from "@/theme/statistic";
import {
  panelHeaderStyle,
  panelHeaderStyleSecondary,
  panelHeaderStyleSuccess,
  panelHeaderStyleWarning,
  panelStyle,
} from "@/theme/panel";

export default function VMSPage() {
  return (
    <Space orientation="vertical" size={24} style={{ width: "100%" }}>
      {/* KPI */}

      <Row gutter={16}>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Đang kết nối"
              value={dashboard.online}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Mất kết nối"
              value={dashboard.offline}
              prefix={<DisconnectOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Cảnh báo"
              value={dashboard.warning}
              prefix={<WarningOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="SOS"
              value={dashboard.sos}
              prefix={<RadarChartOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Charts */}

      <Row gutter={16}>
        <Col span={16}>
          <Card
            {...panelHeaderStyle}
            style={panelStyle}
            title="Biến động trạng thái VMS"
          >
            <ReactECharts
              style={{
                height: 360,
              }}

              option={{
                tooltip: {
                  trigger: "axis",
                },

                legend: {},

                xAxis: {
                  type: "category",
                  data: trend.map((i) => i.hour),
                },

                yAxis: {
                  type: "value",
                },

                series: [
                  {
                    name: "Online",
                    type: "line",
                    smooth: true,
                    data: trend.map((i) => i.online),
                  },

                  {
                    name: "Offline",
                    type: "line",
                    smooth: true,
                    data: trend.map((i) => i.offline),
                  },
                ],
              }}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            {...panelHeaderStyleSecondary}
            style={panelStyle}
            title="Phân bố trạng thái"
          >
            <ReactECharts
              style={{
                height: 360,
              }}

              option={{
                tooltip: {},

                legend: {
                  bottom: 0,
                },

                series: [
                  {
                    type: "pie",

                    radius: "65%",

                    data: status,
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* Business */}

      <Row gutter={16}>
        <Col span={8}>
          <Card
            {...panelHeaderStyleSuccess}
            style={panelStyle}
            title="Tình trạng hệ thống"
          >
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
              size={20}
            >
              <Statistic title="Tỷ lệ kết nối" value={92} suffix="%" />

              <Progress percent={92} status="active" />

              <Statistic title="Thiết bị hoạt động" value={dashboard.online} />

              <Statistic
                title="Cảnh báo đang xử lý"
                value={dashboard.warning}
              />
            </Space>
          </Card>
        </Col>

        <Col span={16}>
          <Card
            {...panelHeaderStyleWarning}
            style={panelStyle}
            title="Danh sách cảnh báo"
          >
            <Table
              rowKey="id"

              pagination={false}

              dataSource={warnings}

              columns={[
                {
                  title: "Tàu",
                  dataIndex: "vessel",
                },

                {
                  title: "Khu vực",
                  dataIndex: "area",
                },

                {
                  title: "Sự kiện",
                  dataIndex: "event",
                },

                {
                  title: "Thời gian",
                  dataIndex: "time",
                },

                {
                  title: "Mức độ",

                  render: (_, record) => {
                    switch (record.level) {
                      case "Cao":
                        return <Tag color="red">Cao</Tag>;

                      case "Trung bình":
                        return <Tag color="orange">Trung bình</Tag>;

                      default:
                        return <Tag color="green">Thấp</Tag>;
                    }
                  },
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
