import { Marker, Popup } from "react-leaflet";
import type { GISWarning } from "@/types/gis";
import { createMarkerIcon } from "@/utils/mapIcon";

interface WarningLayerProps {
    warnings: GISWarning[];
}

const WarningLayer = ({ warnings }: WarningLayerProps) => {
    if (!warnings.length) return null;

    return (
        <>
            {warnings.map((warning) => (
                <Marker key={warning.id} position={[warning.latitude, warning.longitude]} icon={createMarkerIcon("warning")}>
                    <Popup>
                        <div style={{ minWidth: 240 }}>
                            <h4>{warning.title}</h4>
                            <p><strong>Loại:</strong> {warning.type}</p>
                            <p><strong>Mức độ:</strong> {warning.level}</p>
                            <p><strong>Tàu:</strong> {warning.vesselCode}</p>
                            <p><strong>Thời gian:</strong> {warning.time}</p>
                            <p><strong>Mô tả:</strong> {warning.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default WarningLayer;