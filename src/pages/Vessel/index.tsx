import { Card, Col, Progress, Row, Space, Statistic, Table, Tag } from "antd";

import {
  CarOutlined,
  RadarChartOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  DatabaseOutlined,
  RiseOutlined,
  LineChartOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import { vesselTrend, vesselJob, warningVessels } from "./mock";

export default function VesselPage() {
  return (
    <Space orientation="vertical" size={24} style={{ width: "100%" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Tổng tàu cá"
              value={1286}
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Đang hoạt động"
              value={1143}
              prefix={<RiseOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Đang ngoài khơi"
              value={724}
              prefix={<LineChartOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Cảnh báo"
              value={18}
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Sản lượng khai thác theo tháng">
            <ReactECharts
              style={{ height: 360 }}
              option={{
                tooltip: {},
                xAxis: {
                  type: "category",
                  data: vesselTrend.map((i) => i.month),
                },
                yAxis: {
                  type: "value",
                },
                series: [
                  {
                    type: "line",
                    smooth: true,
                    areaStyle: {},
                    data: vesselTrend.map((i) => i.value),
                  },
                ],
              }}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Cơ cấu nghề khai thác">
            <ReactECharts
              style={{ height: 360 }}
              option={{
                tooltip: {},
                legend: {
                  bottom: 0,
                },
                series: [
                  {
                    type: "pie",
                    radius: "65%",
                    data: vesselJob,
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Hiệu quả khai thác">
            <Space direction="vertical" style={{ width: "100%" }} size={20}>
              <Statistic title="Chuyến biển hoàn thành" value={94} suffix="%" />

              <Statistic title="Hiệu suất khai thác" value={82} suffix="%" />

              <Statistic title="Tuân thủ VMS" value={96} suffix="%" />
            </Space>
          </Card>
        </Col>

        <Col span={16}>
          <Card title="Các tàu cần theo dõi">
            <Table
              rowKey="id"

              pagination={false}

              dataSource={warningVessels}

              columns={[
                {
                  title: "Tàu",
                  dataIndex: "vessel",
                },

                {
                  title: "Chủ tàu",
                  dataIndex: "owner",
                },

                {
                  title: "Khu vực",
                  dataIndex: "area",
                },

                {
                  title: "Cảnh báo",
                  dataIndex: "warning",
                },

                {
                  title: "Mức độ",

                  render: (_, r) => {
                    switch (r.level) {
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
