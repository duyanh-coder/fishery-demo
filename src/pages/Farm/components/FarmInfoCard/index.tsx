import {
    Badge,
    Card,
    Descriptions,
    Space,
    Typography,
} from "antd";

import type { Farm } from "../../types";

import "./style.scss";

const { Title, Text } = Typography;

interface FarmInfoCardProps {
    farm: Farm;
}

const statusConfig = {
    ACTIVE: {
        status: "success" as const,
        text: "Đang hoạt động",
    },
    WARNING: {
        status: "warning" as const,
        text: "Cảnh báo",
    },
    INACTIVE: {
        status: "error" as const,
        text: "Ngừng hoạt động",
    },
};

const FarmInfoCard = ({ farm }: FarmInfoCardProps) => {
    const status = statusConfig[farm.status];

    return (
        <Card
            className="farm-info-card"
            title="Thông tin vùng nuôi"
        >
            <Space
                orientation="vertical"
                size={4}
                className="farm-info-card__header"
            >
                <Badge
                    status={status.status}
                    text={status.text}
                />

                <Title level={5} style={{ margin: 0 }}>
                    {farm.name}
                </Title>

                <Text type="secondary">
                    {farm.code}
                </Text>
            </Space>

            <Descriptions
                column={1}
                size="small"
                bordered
            >
                <Descriptions.Item label="Chủ hộ">
                    {farm.owner}
                </Descriptions.Item>

                <Descriptions.Item label="Điện thoại">
                    {farm.phone}
                </Descriptions.Item>

                <Descriptions.Item label="Địa chỉ">
                    {farm.address}
                </Descriptions.Item>

                <Descriptions.Item label="Quận/Huyện">
                    {farm.district}
                </Descriptions.Item>

                <Descriptions.Item label="Loài nuôi">
                    {farm.species}
                </Descriptions.Item>

                <Descriptions.Item label="Diện tích">
                    {farm.area} ha
                </Descriptions.Item>

                <Descriptions.Item label="Sản lượng">
                    {farm.production} tấn
                </Descriptions.Item>

                <Descriptions.Item label="Ngày cấp mã">
                    {farm.issuedDate}
                </Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default FarmInfoCard;