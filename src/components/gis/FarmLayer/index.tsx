import { Polygon, Popup } from "react-leaflet";
import type { GISFarm } from "@/types/gis";

interface FarmLayerProps {
    farms: GISFarm[];
}

const FarmLayer = ({ farms }: FarmLayerProps) => {
    if (!farms.length) {
        return null;
    }

    return (
        <>
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
                        <div style={{ minWidth: 220 }}>
                            <h4>{farm.name}</h4>

                            <p>
                                <strong>Diện tích:</strong> {farm.area} ha
                            </p>

                            <p>
                                <strong>Sản lượng:</strong> {farm.production} tấn
                            </p>

                            <p>
                                <strong>Đối tượng nuôi:</strong> {farm.species}
                            </p>

                            <p>
                                <strong>Doanh nghiệp:</strong> {farm.owner}
                            </p>
                        </div>
                    </Popup>
                </Polygon>
            ))}
        </>
    );
};

export default FarmLayer;