import { useEffect, useState } from "react";

import { Col, Row, Space } from "antd";

import { getDashboardReport } from "./service";

import type {
  ProductionChartItem,
  ProvinceRankingItem,
  RecentReport,
  ReportKPI,
  WarningChartItem,
  WaterQualityChartItem,
} from "./types";

import ReportStatistic from "../components/ReportStatistic";
import ReportFilter, {
  type ReportFilterValue,
} from "../components/ReportFilter";
import ProductionChart from "../components/ProductionChart";
import WaterQualityChart from "../components/WaterQualityChart";
import WarningChart from "../components/WarningChart";
import ProvinceRanking from "../components/ProvinceRanking";
import RecentReportTable from "../components/RecentReportTable";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  const [kpi, setKPI] = useState<ReportKPI>({
    totalReports: 0,
    productionReports: 0,
    waterReports: 0,
    warningReports: 0,
  });

  const [production, setProduction] = useState<ProductionChartItem[]>([]);

  const [water, setWater] = useState<WaterQualityChartItem[]>([]);

  const [warning, setWarning] = useState<WarningChartItem[]>([]);

  const [ranking, setRanking] = useState<ProvinceRankingItem[]>([]);

  const [reports, setReports] = useState<RecentReport[]>([]);

  const loadDashboard = async () => {
    setLoading(true);

    try {
      const res = await getDashboardReport();

      setKPI(res.kpi);

      setProduction(res.production);

      setWater(res.water);

      setWarning(res.warning);

      setRanking(res.ranking);

      setReports(res.reports);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadDashboard();
  }, []);

  const handleSearch = (values: ReportFilterValue) => {
    console.log(values);
  };
  const handleReset = () => {
    loadDashboard();
  };
  const handleExportExcel = () => {
    console.log("Export Excel");
  };
  const handleExportPDF = () => {
    console.log("Export PDF");
  };
  const handleViewReport = (row: RecentReport) => {
    console.log(row);
  };
  const handleDownloadReport = (row: RecentReport) => {
    console.log(row);
  };
  return (
    <Space
      orientation="vertical"
      size={16}
      style={{
        width: "100%",
      }}
    >
      <ReportStatistic data={kpi} />

      <ReportFilter
        loading={loading}
        onSearch={handleSearch}
        onReset={handleReset}
        onExportExcel={handleExportExcel}
        onExportPDF={handleExportPDF}
      />

      <Row gutter={16}>
        <Col xs={24} xl={12}>
          <ProductionChart
            data={production}
            loading={loading}
          />
        </Col>

        <Col xs={24} xl={12}>
          <WaterQualityChart
            data={water}
            loading={loading}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} xl={12}>
          <WarningChart
            data={warning}
            loading={loading}
          />
        </Col>

        <Col xs={24} xl={12}>
          <ProvinceRanking
            data={ranking}
            loading={loading}
          />
        </Col>
      </Row>

      <RecentReportTable
        data={reports}
        loading={loading}
        onView={handleViewReport}
        onDownload={handleDownloadReport}
      />
    </Space>
  );
}
