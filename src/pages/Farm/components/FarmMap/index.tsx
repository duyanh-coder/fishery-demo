import { Card, Descriptions, Tag, Typography } from "antd";

import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";

import "./style.scss";
import type { Farm } from "../../types";

interface FarmMapProps {
  farm: Farm;
}

const FarmMap = ({ farm }: FarmMapProps) => {
  return (
    <Card title="Vị trí vùng nuôi" className="farm-map">
      <MapContainer
        center={[farm.location.lat, farm.location.lng]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[farm.location.lat, farm.location.lng]}>
          {/* <Popup>{farm.name}</Popup> */}
          <Popup>
            <Typography.Title level={5} style={{ marginBottom: 12 }}>
              {farm.name}
            </Typography.Title>

            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Mã">{farm.code}</Descriptions.Item>

              <Descriptions.Item label="Địa chỉ">
                {farm.location.address}
              </Descriptions.Item>

              <Descriptions.Item label="Diện tích">
                {farm.area} ha
              </Descriptions.Item>

              <Descriptions.Item label="Đối tượng">
                {farm.species}
              </Descriptions.Item>

              <Descriptions.Item label="Trạng thái">
                <Tag color="success">{farm.status}</Tag>
              </Descriptions.Item>
            </Descriptions>
          </Popup>
        </Marker>
        <Polygon
          positions={farm.polygon}

          pathOptions={{
            color: "#1890ff",

            fillColor: "#69b1ff",

            fillOpacity: 0.35,

            weight: 2,
          }}
        />
      </MapContainer>
    </Card>
  );
};

export default FarmMap;
