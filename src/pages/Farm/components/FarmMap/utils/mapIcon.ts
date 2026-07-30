import L from "leaflet";

import fishMarker from "@/assets/map/fish-marker.svg";
import shrimpMarker from "@/assets/map/shrimp-marker.svg";
import crabMarker from "@/assets/map/crab-marker.svg";

import warningMarker from "@/assets/map/warning-marker.svg";
import inactiveMarker from "@/assets/map/inactive-marker.svg";

import shadow from "@/assets/map/marker-shadow.png";

import type { Farm } from "../../../types";

// import { fishIcon, shrimpIcon, crabIcon } from "./icon";
const createIcon = (iconUrl: string) =>
    L.icon({
        iconUrl,
        shadowUrl: shadow,

        iconSize: [36, 48],
        iconAnchor: [18, 48],
        popupAnchor: [0, -42],

        shadowSize: [42, 42],
    });

const fishIcon = createIcon(fishMarker);

const shrimpIcon = createIcon(shrimpMarker);

const crabIcon = createIcon(crabMarker);

const warningIcon = createIcon(warningMarker);

const inactiveIcon = createIcon(inactiveMarker);

export function getMarkerIcon(
    farm: Farm,
) {

    // Ưu tiên trạng thái

    if (farm.status === "WARNING") {
        return warningIcon;
    }

    if (farm.status === "INACTIVE") {
        return inactiveIcon;
    }

    // ACTIVE thì phân theo loài

    switch (farm.species) {

        case "Cá tra":
            return fishIcon;

        case "Tôm":
            return shrimpIcon;

        case "Cua":
            return crabIcon;

        default:
            return fishIcon;

    }

}