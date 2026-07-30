import type {
  VesselJob,
  VesselKpi,
  VesselTrend,
  VesselWarning,
} from "./types";

export const vesselKpi: VesselKpi = {
  total: 1286,
  active: 1143,
  offshore: 724,
  warning: 18,

  completedTrips: 94,
  fishingEfficiency: 82,
  vmsCompliance: 96,
};

export const vesselTrend: VesselTrend[] = [
  { month: "T1", value: 2450 },
  { month: "T2", value: 2680 },
  { month: "T3", value: 2890 },
  { month: "T4", value: 3150 },
  { month: "T5", value: 3520 },
  { month: "T6", value: 3910 },
  { month: "T7", value: 4250 },
  { month: "T8", value: 4180 },
  { month: "T9", value: 3960 },
  { month: "T10", value: 3720 },
  { month: "T11", value: 3380 },
  { month: "T12", value: 3010 },
];

export const vesselJob: VesselJob[] = [
  {
    name: "Lưới kéo",
    value: 35,
  },
  {
    name: "Lưới rê",
    value: 27,
  },
  {
    name: "Lưới vây",
    value: 18,
  },
  {
    name: "Câu mực",
    value: 12,
  },
  {
    name: "Khác",
    value: 8,
  },
];

export const warningVessels: VesselWarning[] = [
  {
    id: 1,
    vessel: "CT-90001-TS",
    owner: "Nguyễn Văn A",
    area: "Trường Sa",
    warning: "Mất tín hiệu VMS",
    level: "Cao",
  },
  {
    id: 2,
    vessel: "CT-90015-TS",
    owner: "Trần Văn B",
    area: "Côn Đảo",
    warning: "Ngoài vùng khai thác",
    level: "Trung bình",
  },
  {
    id: 3,
    vessel: "CT-90042-TS",
    owner: "Lê Văn C",
    area: "Phú Quốc",
    warning: "Sắp hết giấy phép",
    level: "Thấp",
  },
  {
    id: 4,
    vessel: "CM-11025-TS",
    owner: "Phạm Văn D",
    area: "Kiên Giang",
    warning: "Quá hạn đăng kiểm",
    level: "Cao",
  },
  {
    id: 5,
    vessel: "BL-20318-TS",
    owner: "Ngô Văn E",
    area: "Bạc Liêu",
    warning: "Sắp hết giấy phép",
    level: "Thấp",
  },
];