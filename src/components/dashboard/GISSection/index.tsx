import { Card, List, Space, Tag } from "antd";
import { EnvironmentOutlined, WarningOutlined } from "@ant-design/icons";

import type { GISMarker } from "@/types/dashboard";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./style.scss";

interface Props {
  markers: GISMarker[];
}

const GISSection = ({ markers: markers }: Props) => {
  return (
    <Card
      title="Bản đồ GIS"
      className="gis-section"
      extra={<EnvironmentOutlined />}
    >
      <Space orientation="vertical" style={{ width: "100%" }}>
        <MapContainer
          center={[10.0452, 105.7469]}
          zoom={9}
          style={{
            height: 400,
            borderRadius: 12,
          }}
        >
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
            >
              <Popup>
                <strong>{marker.name}</strong>

                <br />

                {marker.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Space>
    </Card>
  );
};

export default GISSection;
