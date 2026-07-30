import { Card, Descriptions, Tag, Typography } from "antd";

import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  ScaleControl,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import "./style.scss";
import type { Farm } from "../../types";
import MapOverlay from "./components/MapOverlay";
import MapToolbar from "./components/MapToolbar";
import FarmMarker from "./components/FarmMarker";
import FarmPolygon from "./components/FarmPolygon";
import FitBounds from "./hooks/useFitBounds";

interface FarmMapProps {
  farm: Farm;
}

const FarmMap = ({ farm }: FarmMapProps) => {
  // console.log(farm);
  return (
    <Card className="farm-map">
      <MapOverlay farm={farm} />

      <MapToolbar farm={farm} />

      <MapContainer>
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FarmMarker farm={farm} />

        <FarmPolygon farm={farm} />

        <FitBounds polygon={farm.polygon} />

        <ScaleControl position="bottomleft" />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </Card>
  );
};

export default FarmMap;
