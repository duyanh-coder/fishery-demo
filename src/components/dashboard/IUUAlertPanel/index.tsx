import { Card, Space, Tag, Typography } from "antd";

const { Text } = Typography;

import type { IUUAlert } from "@/types/dashboard";

import "./style.scss";
import { panelHeaderStyleWarning, panelStyle } from "@/theme/panel";

interface Props {
  alerts: IUUAlert[];
}

const IUUAlertPanel = ({ alerts }: Props) => {
  return (
    <Card 
      title="Cảnh báo IUU"
      className="iuu-panel"
      {...panelHeaderStyleWarning}
      style={panelStyle}
    >
      <Space orientation="vertical" style={{ width: "100%" }} size="middle">
        {alerts.map((item: any) => (
          <Card  key={item.id} size="small">
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
