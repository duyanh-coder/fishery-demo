import { Col, Row } from "antd";

import KPISection from "@/components/dashboard/KPISection";
import PageContainer from "@/components/common/PageContainer";
import PageTitle from "@/components/common/PageTitle";

import "./style.scss";
import {
  dashboardSummary,
  productionChart,
  aquacultureChart,
  iuuAlerts,
} from "@/mock/dashboard";
import ProductionChart from "@/components/dashboard/ProductionChart";
import AquacultureChart from "@/components/dashboard/AquacultureChart";
import IUUAlertPanel from "@/components/dashboard/IUUAlertPanel";

import GISMap from "@/components/gis/GISMap";

import { farms, ports, stations, vessels, warnings } from "@/mock/gis";
import { SPACING } from "@/theme";

const DashboardPage = () => {
  return (
    <PageContainer>
      <PageTitle
        title="Dashboard"
        subTitle="Hệ thống chuyển đổi số ngành thủy sản"
      />

      <KPISection data={dashboardSummary} styles={{ marginBottom: 20 }} />

      <Row gutter={[20, 20]}>
        <Col
          span={12}
          style= {{marginBottom: SPACING.lg}}
        >
          <ProductionChart data={productionChart} />
        </Col>

        <Col span={12} style= {{marginBottom: SPACING.lg}}>
          <AquacultureChart data={aquacultureChart} />
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        <Col span={16} style= {{marginBottom: SPACING.lg}}>
          <GISMap
            farms={farms}
            ports={ports}
            stations={stations}
            vessels={vessels}
            warnings={warnings}
          />
        </Col>
        <Col span={8} style= {{marginBottom: SPACING.lg}}>
          <IUUAlertPanel alerts={iuuAlerts} />
        </Col>
      </Row>
      
    </PageContainer>
  );
};

export default DashboardPage;
