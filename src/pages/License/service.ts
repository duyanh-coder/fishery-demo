import {
    licenseDashboard,
    licenseMonthly,
    licenseType,
    licenseWarnings,
} from "./mock";

export const getLicenseDashboard = () => {
    return Promise.resolve({
        dashboard: licenseDashboard,
        monthly: licenseMonthly,
        types: licenseType,
        warnings: licenseWarnings,
    });
};