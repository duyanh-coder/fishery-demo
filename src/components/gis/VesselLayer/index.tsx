import { Marker, Popup } from "react-leaflet";
import type { GISVessel } from "@/types/gis";
import { createMarkerIcon } from "@/utils/mapIcon";

interface VesselLayerProps {
    vessels: GISVessel[];
}

const VesselLayer = ({ vessels }: VesselLayerProps) => {
    if (!vessels.length) return null;

    return (
        <>
            {vessels.map((vessel) => (
                <Marker key={vessel.id} position={[vessel.latitude, vessel.longitude]} icon={createMarkerIcon("vessel")}>
                    <Popup>
                        <div style={{ minWidth: 240 }}>
                            <h4>{vessel.name}</h4>
                            <p><strong>Số đăng ký:</strong> {vessel.code}</p>
                            <p><strong>Chủ tàu:</strong> {vessel.owner}</p>
                            <p><strong>Tốc độ:</strong> {vessel.speed} knots</p>
                            <p><strong>Hướng:</strong> {vessel.heading}°</p>
                            <p><strong>Trạng thái:</strong> {vessel.status}</p>
                            <p><strong>Cập nhật:</strong> {vessel.lastUpdate}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default VesselLayer;