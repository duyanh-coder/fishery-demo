import { Button, Space } from "antd";

import { EnvironmentOutlined, FullscreenOutlined } from "@ant-design/icons";

import type { Farm } from "../../../types";

interface Props {
  farm: Farm;
}

export default function MapToolbar({ farm }: Props) {
  return (
    <Space className="map-toolbar" orientation="vertical">
      <Button
        icon={<EnvironmentOutlined />}

        onClick={() =>
          window.open(
            `https://www.google.com/maps?q=${farm.location.lat},${farm.location.lng}`,

            "_blank",
          )
        }
      >
        Google Maps
      </Button>

      <Button icon={<FullscreenOutlined />}>Toàn màn hình</Button>
    </Space>
  );
}
