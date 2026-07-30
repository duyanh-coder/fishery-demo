import {
    Marker,
    Popup,
} from "react-leaflet";

import {
    Descriptions,
    Tag,
} from "antd";

import type { Farm } from "../../../types";
import { getMarkerIcon } from "../utils/mapIcon";

interface Props {
    farm: Farm;
}

export default function FarmMarker({
    farm,
}: Props) {
    return (
        <Marker
            position={[
                farm.location.lat,
                farm.location.lng,
            ]}
        >
            {/* icon={getMarkerIcon(farm)} */}

            <Popup>

                <Descriptions
                    size="small"
                    column={1}
                >

                    <Descriptions.Item label="Tên">
                        {farm.name}
                    </Descriptions.Item>

                    <Descriptions.Item label="Đối tượng">
                        {farm.species}
                    </Descriptions.Item>

                    <Descriptions.Item label="Diện tích">
                        {farm.area} ha
                    </Descriptions.Item>

                    <Descriptions.Item label="Trạng thái">
                        <Tag color="green">
                            {farm.status}
                        </Tag>
                    </Descriptions.Item>

                </Descriptions>

            </Popup>

        </Marker>

    );

}