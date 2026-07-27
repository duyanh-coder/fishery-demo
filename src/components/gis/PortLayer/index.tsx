import { Marker, Popup } from "react-leaflet";

import type { GISPort } from "@/types/gis";
import { createMarkerIcon } from "@/utils/mapIcon";

interface PortLayerProps {
    ports: GISPort[];
}

const PortLayer = ({ ports }: PortLayerProps) => {
    if (!ports.length) {
        return null;
    }

    return (
        <>
            {ports.map((port) => (
                <Marker
                    key={port.id}
                    position={[port.latitude, port.longitude]}
                    icon={createMarkerIcon("port")}
                >
                    <Popup>
                        <div style={{ minWidth: 220 }}>
                            <h4>{port.name}</h4>

                            <p>
                                <strong>Địa chỉ:</strong>
                                <br />
                                {port.address}
                            </p>

                            <p>
                                <strong>Công suất:</strong> {port.capacity} lượt/ngày
                            </p>

                            <p>
                                <strong>Số tàu đang neo:</strong> {port.vessels}
                            </p>

                            <p>
                                <strong>Trạng thái:</strong> {port.status}
                            </p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default PortLayer;