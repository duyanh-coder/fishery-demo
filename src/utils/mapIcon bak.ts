import L, { DivIcon } from "leaflet";

export type MarkerType =
    | "port"
    | "monitoring"
    | "vessel"
    | "warning";

const markerConfig = {
    port: {
        color: "#1677ff",
        icon: "⚓",
    },
    monitoring: {
        color: "#fa8c16",
        icon: "📡",
    },
    vessel: {
        color: "#722ed1",
        icon: "🚢",
    },
    warning: {
        color: "#ff4d4f",
        icon: "⚠",
    },
};

export const createMarkerIcon = (
    type: MarkerType
): DivIcon => {

    const config = markerConfig[type];

    return L.divIcon({

        className: "custom-marker",

        html: `
            <div
                style="
                    width:36px;
                    height:36px;
                    border-radius:50%;
                    background:${config.color};
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:white;
                    font-size:18px;
                    border:3px solid white;
                    box-shadow:0 3px 10px rgba(0,0,0,.3);
                "
            >
                ${config.icon}
            </div>
        `,

        iconSize: [36, 36],

        iconAnchor: [18, 36],

        popupAnchor: [0, -36],

    });

};

// import type { ReactNode } from "react";
// import  L, { DivIcon } from "leaflet";
// import { renderToStaticMarkup } from "react-dom/server";

// import {
//     EnvironmentFilled,
//     WarningFilled,
//     RadarChartOutlined,
//     CarOutlined,
//     // AnchorOutlined,
// } from "@ant-design/icons";


// // const getIcon = (type: string): ReactNode => {
// //     switch (type) {
// //         case "farm":
// //             return <EnvironmentFilled />;

// //         // case "port":
// //         //     return <AnchorOutlined />;

// //         case "monitoring":
// //             return <RadarChartOutlined />;

// //         case "warning":
// //             return <WarningFilled />;

// //         case "vessel":
// //             return <CarOutlined />;

// //         default:
// //             return <EnvironmentFilled />;
// //     }
// // };

// const getColor = (type: string) => {
//     switch (type) {
//         case "farm":
//             return "#52c41a";

//         case "port":
//             return "#1677ff";

//         case "monitoring":
//             return "#fa8c16";

//         case "warning":
//             return "#ff4d4f";

//         case "vessel":
//             return "#722ed1";

//         default:
//             return "#1677ff";
//     }
// };

// // export const getMarkerColor = (...)

// // export const createMarkerIcon(...)