import { Card, Col, Row, Space, Statistic, Table, Tag } from "antd";

import {
  RiseOutlined,
  DatabaseOutlined,
  TrophyOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import {
  licenseDashboard,
  licenseMonthly,
  licenseType,
  licenseWarnings,
} from "./mock";
import { statisticCard } from "@/theme/statistic";
import {
  panelHeaderStyle,
  panelHeaderStyleSecondary,
  panelHeaderStyleSuccess,
  panelHeaderStyleWarning,
  panelStyle,
} from "@/theme/panel";

export default function LicensePage() {
  return (
    <Space orientation="vertical" size={24} style={{ width: "100%" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Tổng giấy phép"
              value={licenseDashboard.total}
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Còn hiệu lực"
              value={licenseDashboard.active}
              prefix={<RiseOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Sắp hết hạn"
              value={licenseDashboard.expiring}
              prefix={<LineChartOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Hết hạn"
              value={licenseDashboard.expired}
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Card
            {...panelHeaderStyle}
            style={panelStyle}
            title="Giấy phép cấp mới theo tháng"
          >
            <ReactECharts
              style={{ height: 360 }}
              option={{
                tooltip: {},
                xAxis: {
                  type: "category",
                  data: licenseMonthly.map((i) => i.month),
                },
                yAxis: {
                  type: "value",
                },
                series: [
                  {
                    type: "line",
                    smooth: true,
                    areaStyle: {},
                    data: licenseMonthly.map((i) => i.value),
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
            title="Cơ cấu giấy phép"
          >
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
                    data: licenseType,
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card
            {...panelHeaderStyleSuccess}
            style={panelStyle}
            title="Gia hạn sắp tới"
          >
            <Space orientation="vertical" style={{ width: "100%" }} size={24}>
              <Statistic title="30 ngày tới" value={42} suffix="GP" />

              <Statistic title="Đã gia hạn" value={91} suffix="%" />

              <Statistic title="Chưa xử lý" value={18} />
            </Space>
          </Card>
        </Col>

        <Col span={16}>
          <Card
            {...panelHeaderStyleWarning}
            style={panelStyle}
            title="Danh sách cần gia hạn"
          >
            <Table
              rowKey="id"

              pagination={false}

              dataSource={licenseWarnings}

              columns={[
                {
                  title: "Giấy phép",
                  dataIndex: "license",
                },

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
                      case "Hiệu lực":
                        return <Tag color="green">Hiệu lực</Tag>;

                      case "Sắp hết":
                        return <Tag color="orange">Sắp hết</Tag>;

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
