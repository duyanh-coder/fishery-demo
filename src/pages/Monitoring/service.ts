import {
    dashboard,
    trend,
    quality,
    stations,
} from "./mock";

export const getMonitoringDashboard = () => {

    return Promise.resolve({

        dashboard,

        trend,

        quality,

        stations,

    });

};