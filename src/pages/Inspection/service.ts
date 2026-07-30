import {
    inspectionDashboard,
    inspectionMonthly,
    inspectionResult,
    inspectionWarnings,
} from "./mock";

export const getInspectionDashboard = () => {
    return Promise.resolve({
        dashboard: inspectionDashboard,
        monthly: inspectionMonthly,
        result: inspectionResult,
        warnings: inspectionWarnings,
    });
};