import {
    Card,
    Space,
    Typography,
} from "antd";

import {
    EnvironmentOutlined,
} from "@ant-design/icons";

import type { Farm } from "../../../types";

interface Props {
    farm: Farm;
}

export default function MapOverlay({
    farm,
}: Props) {

    return (
        <Card
            size="small"
            className="map-overlay"
        >
            <Space orientation="vertical">

                <Typography.Text strong>
                    {farm.area} ha
                </Typography.Text>

                <Typography.Text type="secondary">
                    {farm.species}
                </Typography.Text>

                <Typography.Text>
                    {farm.location.address}
                </Typography.Text>

            </Space>

        </Card>

    );

}