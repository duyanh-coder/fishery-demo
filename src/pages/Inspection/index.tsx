import { Card, Col, Progress, Row, Space, Statistic, Table, Tag } from "antd";

import {
  DatabaseOutlined,
  RiseOutlined,
  SafetyOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import {
  inspectionDashboard,
  inspectionMonthly,
  inspectionResult,
  inspectionWarnings,
} from "./mock";

export default function InspectionPage() {
  return (
    <Space direction="vertical" size={24} style={{ width: "100%" }}>
      {/* KPI */}

      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Tổng tàu"
              value={inspectionDashboard.total}
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Đã đăng kiểm"
              value={inspectionDashboard.inspected}
              prefix={<SafetyOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Sắp đến hạn"
              value={inspectionDashboard.expiring}
              prefix={<WarningOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Quá hạn"
              value={inspectionDashboard.expired}
              prefix={<RiseOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Charts */}

      <Row gutter={16}>
        <Col span={16}>
          <Card title="Đăng kiểm theo tháng">
            <ReactECharts
              style={{ height: 360 }}

              option={{
                tooltip: {},

                xAxis: {
                  type: "category",
                  data: inspectionMonthly.map((i) => i.month),
                },

                yAxis: {
                  type: "value",
                },

                series: [
                  {
                    type: "line",
                    smooth: true,
                    areaStyle: {},
                    data: inspectionMonthly.map((i) => i.value),
                  },
                ],
              }}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Kết quả đăng kiểm">
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
                    data: inspectionResult,
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* Business Highlight */}

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tiến độ đăng kiểm">
            <Space direction="vertical" style={{ width: "100%" }} size={24}>
              <div>
                Đã đăng kiểm
                <Progress percent={95} status="success" />
              </div>

              <div>
                Hồ sơ xử lý
                <Progress percent={82} />
              </div>

              <div>
                Đúng hạn
                <Progress percent={97} />
              </div>
            </Space>
          </Card>
        </Col>

        <Col span={16}>
          <Card title="Danh sách tàu sắp đến hạn">
            <Table
              rowKey="id"

              pagination={false}

              dataSource={inspectionWarnings}

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
                  title: "Ngày hết hạn",
                  dataIndex: "expired",
                },

                {
                  title: "Trạng thái",

                  render: (_, r) => {
                    switch (r.status) {
                      case "Đạt":
                        return <Tag color="green">Đạt</Tag>;

                      case "Sắp đến hạn":
                        return <Tag color="orange">Sắp đến hạn</Tag>;

                      default:
                        return <Tag color="red">Quá hạn</Tag>;
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
