import { Card, Space, Tag, Typography } from "antd";

const { Text } = Typography;

import type { IUUAlert } from "@/types/dashboard";

import "./style.scss";

interface Props {
  alerts: IUUAlert[];
}

const IUUAlertPanel = ({ alerts }: Props) => {
  return (
    <Card title="Cảnh báo IUU" className="iuu-panel">
      <Space orientation="vertical" style={{ width: "100%" }} size="middle">
        {alerts.map((item) => (
          <Card key={item.id} size="small">
            <Space
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Text strong>{item.title}</Text>

                <br />

                <Text type="secondary">{item.description}</Text>
              </div>

              <Tag
                color={
                  item.level === "danger"
                    ? "red"
                    : item.level === "warning"
                      ? "orange"
                      : "green"
                }
              >
                {item.quantity}
              </Tag>
            </Space>
          </Card>
        ))}
      </Space>
    </Card>
  );
};

export default IUUAlertPanel;
