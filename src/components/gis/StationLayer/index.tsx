import { Marker, Popup } from "react-leaflet";

import type { GISStation } from "@/types/gis";
import { createMarkerIcon } from "@/utils/mapIcon";

interface StationLayerProps {
    stations: GISStation[];
}

const StationLayer = ({ stations }: StationLayerProps) => {
    if (!stations.length) {
        return null;
    }

    return (
        <>
            {stations.map((station) => (
                <Marker
                    key={station.id}
                    position={[station.latitude, station.longitude]}
                    icon={createMarkerIcon("monitoring")}
                >
                    <Popup>
                        <div style={{ minWidth: 240 }}>
                            <h4>{station.name}</h4>

                            <p>
                                <strong>Nhiệt độ:</strong> {station.temperature} °C
                            </p>

                            <p>
                                <strong>Độ mặn:</strong> {station.salinity} ‰
                            </p>

                            <p>
                                <strong>Độ pH:</strong> {station.ph}
                            </p>

                            <p>
                                <strong>Oxy hòa tan:</strong> {station.do} mg/L
                            </p>

                            <p>
                                <strong>Trạng thái:</strong> {station.status}
                            </p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default StationLayer;