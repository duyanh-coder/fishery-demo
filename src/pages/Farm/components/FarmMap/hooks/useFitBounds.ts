import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface Props {
    polygon: [number, number][];
}

export default function FitBounds({ polygon }: Props) {
    const map = useMap();

    useEffect(() => {
        if (!polygon.length) return;

        map.fitBounds(L.latLngBounds(polygon), {
            padding: [40, 40],
        });
    }, [map, polygon]);

    return null;
}