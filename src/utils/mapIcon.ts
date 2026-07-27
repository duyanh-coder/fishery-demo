import L from "leaflet";

import FarmIcon from "@/assets/map-icons/farm.svg";
import PortIcon from "@/assets/map-icons/port.svg";
import MonitoringIcon from "@/assets/map-icons/monitoring.svg";
import VesselIcon from "@/assets/map-icons/vessel.svg";
import WarningIcon from "@/assets/map-icons/warning.svg";

export type MarkerType =
    | "farm"
    | "port"
    | "monitoring"
    | "vessel"
    | "warning";

const iconMap = {
    farm: FarmIcon,
    port: PortIcon,
    monitoring: MonitoringIcon,
    vessel: VesselIcon,
    warning: WarningIcon,
};

export const createMarkerIcon = (type: MarkerType) =>
    L.icon({
        iconUrl: iconMap[type],
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
    });