import "leaflet/dist/leaflet.css";
import "./style.scss";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import type { GISFarm, GISPort, GISStation, GISVessel, GISWarning } from "@/types/gis";

import FarmLayer from "../FarmLayer";
import PortLayer from "../PortLayer";
import StationLayer from "../StationLayer";
import VesselLayer from "../VesselLayer";
import WarningLayer from "../WarningLayer";

interface GISMapProps {
    farms: GISFarm[];
    ports: GISPort[];
    stations: GISStation[];
    vessels: GISVessel[];
    warnings: GISWarning[];
}

const defaultCenter: [number, number] = [10.030, 105.770];

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
                center={defaultCenter}
                zoom={11}
                zoomControl={false}
                scrollWheelZoom
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomControl position="bottomright" />

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FarmLayer farms={farms} />

                <PortLayer ports={ports} />

                <StationLayer stations={stations} />

                <VesselLayer vessels={vessels} />

                <WarningLayer warnings={warnings} />

            </MapContainer>
        </div>
    );
};

export default GISMap;