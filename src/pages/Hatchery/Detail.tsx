import { useParams } from "react-router-dom";

import {
  Card,
  Col,
  Descriptions,
  Progress,
  Row,
  Space,
  Statistic,
  Table,
  Tag,
  Timeline,
  Typography,
} from "antd";

import {
  EnvironmentOutlined,
  CiOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";

import ReactECharts from "echarts-for-react";

import { getHatcheryById } from "./service";
import { statisticCard } from "@/theme/statistic";
import { panelHeaderStyle, panelHeaderStyleInfo, panelHeaderStyleSuccess, panelHeaderStyleWarning, panelStyle } from "@/theme/panel";

const productionOption = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["T1", "T2", "T3", "T4", "T5", "T6"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "line",
      smooth: true,
      areaStyle: {},
      data: [1.2, 1.8, 2.4, 2.1, 3.2, 3.6],
    },
  ],
};

export default function HatcheryDetail() {
  const { id } = useParams();

  const hatchery = getHatcheryById(Number(id));

  if (!hatchery) {
    return <>Không tìm thấy cơ sở giống.</>;
  }

  return (
    <Space orientation="vertical" size={24} style={{ width: "100%" }}>
      <Card>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={3} style={{ margin: 0 }}>
              {hatchery.name}
            </Typography.Title>

            <Typography.Text type="secondary">{hatchery.code}</Typography.Text>
          </Col>

          <Col>
            <Tag color="green">Đang hoạt động</Tag>
          </Col>
        </Row>
      </Card>

      <Row gutter={16}>
        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Công suất"
              value={hatchery.capacity}
              suffix="triệu con"
              prefix={<CiOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Sản lượng"
              value={hatchery.production}
              suffix="triệu"
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic
              title="Tỷ lệ sống"
              value={94.6}
              suffix="%"
              prefix={<SafetyCertificateOutlined />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statisticCard}>
            <Statistic title="Ao ương" value={18} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} align="stretch">
        <Col span={8} style={{ display: "flex" }}>
          <Card
            title="Thông tin cơ sở"
            {...panelHeaderStyle}
            style={{
              ...panelStyle,
              width: "100%",
            }}
          >
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Chủ cơ sở">
                <UserOutlined /> {hatchery.owner}
              </Descriptions.Item>

              <Descriptions.Item label="Điện thoại">
                {hatchery.phone}
              </Descriptions.Item>

              <Descriptions.Item label="Địa chỉ">
                <EnvironmentOutlined /> {hatchery.address}
              </Descriptions.Item>

              <Descriptions.Item label="Loài">
                {hatchery.species}
              </Descriptions.Item>

              <Descriptions.Item label="Ngày cấp">
                {hatchery.licenseDate}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={16} style={{ display: "flex" }}>
          <Card
            title="Sản lượng 6 tháng"
            {...panelHeaderStyleSuccess}
            style={{
              ...panelStyle,
              width: "100%",
            }}
          >
            <ReactECharts option={productionOption} style={{ height: 320 }} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card
            {...panelHeaderStyleSuccess}
            style={{
              ...panelStyle,
              height: "100%",
            }}
            title="Hiệu suất"
          >
            <Typography.Text>Công suất sử dụng</Typography.Text>

            <Progress percent={82} status="active" />

            <Typography.Text>Tỷ lệ sống</Typography.Text>

            <Progress percent={95} />

            <Typography.Text>Đạt tiêu chuẩn</Typography.Text>

            <Progress percent={98} />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            {...panelHeaderStyleWarning}
            style={{
              ...panelStyle,
              height: "100%",
            }}
            title="Kiểm định"
          >
            <Timeline
              items={[
                {
                  color: "green",
                  children: "Đạt VietGAP",
                },
                {
                  color: "green",
                  children: "Đạt kiểm dịch",
                },
                {
                  color: "blue",
                  children: "Kiểm tra môi trường",
                },
                {
                  color: "orange",
                  children: "Khuyến nghị nâng cấp hệ thống lọc",
                },
              ]}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            {...panelHeaderStyleInfo}
            style={{
              ...panelStyle,
              height: "100%",
            }}
            title="Lịch sử hoạt động"
          >
            <Timeline
              items={[
                {
                  children: "Xuất bán 2.1 triệu cá giống",
                },
                {
                  children: "Nhập đàn cá bố mẹ",
                },
                {
                  children: "Lấy mẫu xét nghiệm",
                },
                {
                  children: "Khử trùng hệ thống",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Card
        {...panelHeaderStyleInfo}
        style={{
          ...panelStyle,
          height: "100%",
        }}
        title="Lịch sử kiểm tra"
      >
        <Table
          rowKey="id"

          pagination={false}

          dataSource={[
            {
              id: 1,
              date: "12/05/2026",
              agency: "Chi cục Thủy sản",
              result: "Đạt",
            },
            {
              id: 2,
              date: "08/03/2026",
              agency: "Sở NN&MT",
              result: "Đạt",
            },
            {
              id: 3,
              date: "15/01/2026",
              agency: "Chi cục Thủy sản",
              result: "Khuyến nghị",
            },
          ]}

          columns={[
            {
              title: "Ngày",
              dataIndex: "date",
            },
            {
              title: "Đơn vị",
              dataIndex: "agency",
            },
            {
              title: "Kết quả",
              render: (_, r) =>
                r.result === "Đạt" ? (
                  <Tag color="green">Đạt</Tag>
                ) : (
                  <Tag color="orange">Khuyến nghị</Tag>
                ),
            },
          ]}
        />
      </Card>
    </Space>
  );
}
