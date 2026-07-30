import {
    dashboard,
    trend,
    status,
    warnings,
} from "./mock";

export const getVMSDashboard = () => {

    return Promise.resolve({

        dashboard,

        trend,

        status,

        warnings,

    });

};