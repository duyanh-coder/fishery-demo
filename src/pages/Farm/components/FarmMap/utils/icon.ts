import L from "leaflet";

import fishMarker from "@/assets/map/fish-marker.png";
import shrimpMarker from "@/assets/map/shrimp-marker.png";
import crabMarker from "@/assets/map/crab-marker.png";
import shadow from "@/assets/map/shadow.png";

const createIcon = (iconUrl: string) =>
    L.icon({
        iconUrl,
        shadowUrl: shadow,

        iconSize: [36, 42],
        iconAnchor: [18, 42],
        popupAnchor: [0, -38],

        shadowSize: [42, 42],
    });

export const fishIcon = createIcon(fishMarker);

export const shrimpIcon = createIcon(shrimpMarker);

export const crabIcon = createIcon(crabMarker);