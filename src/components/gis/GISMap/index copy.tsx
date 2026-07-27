import {
    MapContainer,
    TileLayer,
    Marker,
    Polygon,
    Popup,
    ZoomControl,
    LayersControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./style.scss";

import { createMarkerIcon } from "@/utils/mapIcon";

import type {
    GISFarm,
    GISPort,
    GISStation,
    GISVessel,
    GISWarning,
} from "@/types/gis";

interface GISMapProps {
    farms: GISFarm[];
    ports: GISPort[];
    stations: GISStation[];
    vessels: GISVessel[];
    warnings: GISWarning[];
}

const center: [number, number] = [10.030, 105.770];

const { BaseLayer, Overlay } = LayersControl;

const GISMap = ({
    farms,
    ports,
    stations,
    vessels,
    warnings,
}: GISMapProps) => {
    return (
        <div className="gis-map">
            <MapContainer
                center={center}
                zoom={11}
                zoomControl={false}
                scrollWheelZoom
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ZoomControl position="bottomright" />

                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* ================= Polygon vùng nuôi ================= */}

                {farms.map((farm) => (
                    <Polygon
                        key={farm.id}
                        positions={farm.coordinates}
                        pathOptions={{
                            color: "#52c41a",
                            fillColor: "#52c41a",
                            fillOpacity: 0.35,
                            weight: 2,
                        }}
                    >
                        <Popup>
                            <strong>{farm.name}</strong>

                            <br />

                            Diện tích: {farm.area} ha

                            <br />

                            Sản lượng: {farm.production} tấn
                        </Popup>
                    </Polygon>
                ))}

                {/* ================= Cảng cá ================= */}

                {ports.map((port) => (
                    <Marker
                        key={port.id}
                        position={[port.latitude, port.longitude]}
                        icon={createMarkerIcon("port")}
                    >
                        <Popup>
                            <strong>{port.name}</strong>

                            <br />

                            Công suất: {port.capacity}
                        </Popup>
                    </Marker>
                ))}

                {/* ================= Quan trắc ================= */}

                {stations.map((station) => (
                    <Marker
                        key={station.id}
                        position={[station.latitude, station.longitude]}
                        icon={createMarkerIcon("monitoring")}
                    >
                        <Popup>
                            <strong>{station.name}</strong>

                            <br />

                            Nhiệt độ: {station.temperature} °C

                            <br />

                            Độ mặn: {station.salinity} ‰
                        </Popup>
                    </Marker>
                ))}

                {/* ================= VMS ================= */}

                {vessels.map((vessel) => (
                    <Marker
                        key={vessel.id}
                        position={[vessel.latitude, vessel.longitude]}
                        icon={createMarkerIcon("vessel")}
                    >
                        <Popup>
                            <strong>{vessel.code}</strong>

                            <br />

                            Tốc độ: {vessel.speed} knots
                        </Popup>
                    </Marker>
                ))}

                {/* ================= IUU ================= */}

                {warnings.map((warning) => (
                    <Marker
                        key={warning.id}
                        position={[warning.latitude, warning.longitude]}
                        icon={createMarkerIcon("warning")}
                    >
                        <Popup>
                            <strong>{warning.title}</strong>

                            <br />

                            Mức cảnh báo: {warning.level}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default GISMap;