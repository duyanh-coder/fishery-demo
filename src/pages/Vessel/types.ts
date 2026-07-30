export interface VesselTrend {
  month: string;
  value: number;
}

export interface VesselJob {
  name: string;
  value: number;
}

export interface VesselWarning {
  id: number;
  vessel: string;
  owner: string;
  area: string;
  warning: string;
  level: "Cao" | "Trung bình" | "Thấp";
}

export interface VesselKpi {
  total: number;
  active: number;
  offshore: number;
  warning: number;
  completedTrips: number;
  fishingEfficiency: number;
  vmsCompliance: number;
}