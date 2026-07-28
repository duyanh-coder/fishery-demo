import { Row } from "antd";

import {
    AlertOutlined,
    EnvironmentOutlined,
    ExperimentOutlined,
    GoldOutlined,
    RocketOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";

import KPICard from "../KPICard";
import type { DashboardKPI } from "@/types/dashboard";

const iconMap = [
    <RocketOutlined />,
    <EnvironmentOutlined />,
    <ShoppingOutlined />,
    <GoldOutlined />,
    <ExperimentOutlined />,
    <AlertOutlined />,
];

type Props = {
    data: DashboardKPI[];
    styles?: React.CSSProperties;
};

const KPISection = ({ data, styles }: Props) => {

    const mapped = data.map((item, index) => ({
        ...item,
        icon: iconMap[index],
    }));

    return (
        <Row gutter={[20, 20]} style={styles}>
            {mapped.map((item) => (
                <KPICard key={item.id} item={item} />
            ))}
        </Row>
    );

};

export default KPISection;