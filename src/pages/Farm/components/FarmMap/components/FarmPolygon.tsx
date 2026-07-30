import { Polygon, Popup } from "react-leaflet";
import { Descriptions, Divider, Tag } from "antd";
import type { Farm } from "../../../types";
import {
    polygonStyle,
    polygonHoverStyle,
} from "../utils/mapStyle";

interface Props {
    farm: Farm;
}

const statusMap = {
    ACTIVE: {
        color: "success",
        text: "Đang hoạt động",
    },
    WARNING: {
        color: "warning",
        text: "Cảnh báo",
    },
    INACTIVE: {
        color: "error",
        text: "Ngừng hoạt động",
    },
};

export default function FarmPolygon({
    farm,
}: Props) {

    return (
        <Polygon
            positions={farm.polygon}
            pathOptions={polygonStyle}
            eventHandlers={{
                mouseover(e) {
                    e.target.setStyle(
                        polygonHoverStyle,
                    );
                },

                mouseout(e) {
                    e.target.setStyle(
                        polygonStyle,
                    );
                },
            }}
        >
            <Popup>

                <Descriptions
                    column={1}
                    size="small"
                    title={farm.name}
                >

                    <Descriptions.Item label="Mã">
                        {farm.code}
                    </Descriptions.Item>

                    <Descriptions.Item label="Loài">
                        {farm.species}
                    </Descriptions.Item>

                    <Descriptions.Item label="Diện tích">
                        {farm.area} ha
                    </Descriptions.Item>

                </Descriptions>

                <Divider />

                <Tag
                    color={
                        statusMap[farm.status].color
                    }
                >
                    {
                        statusMap[farm.status].text
                    }
                </Tag>

            </Popup>
        </Polygon>
    );
}