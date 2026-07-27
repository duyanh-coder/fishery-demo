import  L, { DivIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

import {
    EnvironmentFilled,
    WarningFilled,
    RadarChartOutlined,
    CarOutlined,
    // AnchorOutlined,
} from "@ant-design/icons";

import type { ReactNode } from "react";

const getIcon = (type: string): ReactNode => {
    switch (type) {
        case "farm":
            return <EnvironmentFilled />;

        // case "port":
        //     return <AnchorOutlined />;

        case "monitoring":
            return <RadarChartOutlined />;

        case "warning":
            return <WarningFilled />;

        case "vessel":
            return <CarOutlined />;

        default:
            return <EnvironmentFilled />;
    }
};

const getColor = (type: string) => {
    switch (type) {
        case "farm":
            return "#52c41a";

        case "port":
            return "#1677ff";

        case "monitoring":
            return "#fa8c16";

        case "warning":
            return "#ff4d4f";

        case "vessel":
            return "#722ed1";

        default:
            return "#1677ff";
    }
};

// export const getMarkerColor = (...)

// export const createMarkerIcon(...)