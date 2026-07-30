import { useParams } from "react-router-dom";
import { Col, Row } from "antd";

import { getFarmById } from "./service";

import FarmInfoCard from "./components/FarmInfoCard";
import FarmMap from "./components/FarmMap";
import ProductionHistory from "./components/ProductionHistory";
import WaterQualityCard from "./components/WaterQualityCard";
import InspectionTable from "./components/InspectionTable";
import ActivityTimeline from "./components/ActivityTimeline";

// import { ArrowLeftOutlined } from "@ant-design/icons";

const FarmDetail = () => {
  const { id } = useParams();
  const farm = getFarmById(Number(id));

  // console.log(farm);

  if (!farm) {
    return <>Không tìm thấy vùng nuôi.</>;
  }

  return (
    <Row gutter={[16, 16]} align="stretch">
      <Col xs={24}>
      </Col>
      <Col xs={24} lg={10} style={{ display: "flex" }}>
        <FarmInfoCard farm={farm} />
      </Col>

      <Col xs={24} lg={14} style={{ display: "flex" }}>
        <FarmMap 
          farm={farm}
        />
      </Col>

      <Col span={24}>
        <ProductionHistory data={farm.productionHistory} />
      </Col>

      <Col xs={24} lg={8}>
        <WaterQualityCard data={farm.waterQuality} />
      </Col>

      <Col xs={24} lg={16}>
        <InspectionTable data={farm.inspections} />
      </Col>

      <Col span={24}>
        <ActivityTimeline data={farm.activities} />
      </Col>
    </Row>
  );
};

export default FarmDetail;
