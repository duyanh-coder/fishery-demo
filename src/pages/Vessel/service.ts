import {
  vesselJob,
  vesselKpi,
  vesselTrend,
  warningVessels,
} from "./mock";

export const getVesselDashboard = () => {
  return Promise.resolve({
    kpi: vesselKpi,
    trend: vesselTrend,
    jobs: vesselJob,
    warnings: warningVessels,
  });
};