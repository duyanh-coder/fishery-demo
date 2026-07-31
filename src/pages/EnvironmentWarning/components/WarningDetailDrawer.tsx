import { Card, Col, Descriptions, Divider, Drawer, Progress, Row, Space, Statistic, Table, Tag, Timeline } from "antd";
import { AlertOutlined, CheckCircleOutlined, ClockCircleOutlined, FireOutlined, HistoryOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";

import { history } from "../mock";
import { statisticCard } from "@/theme/statistic";

interface Props {
    open: boolean;
    data: any;
    onClose: () => void;
}

export default function WarningDetailDrawer({ open, data, onClose }: Props) {
    return (
        <Drawer
            title={`Chi tiết cảnh báo - ${data?.station || ""}`}
            width={1100}
            open={open}
            onClose={onClose}
        >
            <Row gutter={16}>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Mức độ"
                            value={data?.level}
                            prefix={<FireOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Giá trị đo"
                            value={data?.value}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Ngưỡng"
                            value={data?.threshold}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Trạng thái"
                            value={data?.status}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>

            </Row>

            <Divider titlePlacement="left">
                <AlertOutlined /> Thông tin cảnh báo
            </Divider>

            <Descriptions bordered column={2}>

                <Descriptions.Item label="Trạm">
                    {data?.station}
                </Descriptions.Item>

                <Descriptions.Item label="Thời gian">
                    {data?.warningTime}
                </Descriptions.Item>

                <Descriptions.Item label="Tỉnh/TP">
                    {data?.province}
                </Descriptions.Item>

                <Descriptions.Item label="Phường/Xã">
                    {data?.ward}
                </Descriptions.Item>

                <Descriptions.Item label="Loại cảnh báo">
                    {data?.warningType}
                </Descriptions.Item>

                <Descriptions.Item label="Thông số">
                    {data?.parameter}
                </Descriptions.Item>

                <Descriptions.Item label="Mức độ">

                    <Tag color={
                        data?.level === "Thấp"
                            ? "processing"
                            : data?.level === "Trung bình"
                                ? "warning"
                                : data?.level === "Cao"
                                    ? "error"
                                    : "magenta"
                    }>
                        {data?.level}
                    </Tag>

                </Descriptions.Item>

                <Descriptions.Item label="Trạng thái">

                    <Tag color={
                        data?.status === "Đã xử lý"
                            ? "success"
                            : data?.status === "Đang xử lý"
                                ? "warning"
                                : "error"
                    }>
                        {data?.status}
                    </Tag>

                </Descriptions.Item>

            </Descriptions>

            <Divider titlePlacement="left">
                <WarningOutlined /> Phân tích thông số
            </Divider>

            <Row gutter={16}>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Giá trị đo"
                            value={data?.value}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Ngưỡng"
                            value={data?.threshold}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Chênh lệch"
                            value={(data?.value || 0) - (data?.threshold || 0)}
                            precision={2}
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={statisticCard}>
                        <Statistic
                            title="Vượt ngưỡng"
                            value={((data?.value || 0) / (data?.threshold || 1) * 100).toFixed(0)}
                            suffix="%"
                        />
                    </Card>
                </Col>

            </Row>

            <Progress
                percent={Math.min(
                    Number(((data?.value || 0) / (data?.threshold || 1) * 100).toFixed(0)),
                    100
                )}
                status="exception"
            />

            <Divider titlePlacement="left">
                <WarningOutlined /> Đánh giá ảnh hưởng
            </Divider>

            <Row gutter={16}>

                <Col span={8}>
                    <Card title="Nuôi trồng thủy sản">
                        <Tag color="error">Nguy cơ cao</Tag>
                        <p style={{ marginTop: 12 }}>
                            Thông số vượt ngưỡng có thể ảnh hưởng đến tỷ lệ sống và tốc độ sinh trưởng của thủy sản.
                        </p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Chất lượng nguồn nước">
                        <Tag color="warning">Cần theo dõi</Tag>
                        <p style={{ marginTop: 12 }}>
                            Nguồn nước có dấu hiệu suy giảm chất lượng, cần lấy mẫu bổ sung.
                        </p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Mức độ ưu tiên">
                        <Tag color="magenta">Ưu tiên xử lý</Tag>
                        <p style={{ marginTop: 12 }}>
                            Khuyến nghị xử lý trong vòng 24 giờ kể từ thời điểm phát hiện.
                        </p>
                    </Card>
                </Col>

            </Row>

            <Divider titlePlacement="left">
                <CheckCircleOutlined /> Khuyến nghị xử lý
            </Divider>

            <Card>

                <Timeline
                    items={[
                        {
                            color: "red",
                            children: "Kiểm tra hiện trường và xác nhận số liệu."
                        },
                        {
                            color: "orange",
                            children: "Thông báo cho đơn vị quản lý khu vực."
                        },
                        {
                            color: "blue",
                            children: "Thực hiện biện pháp xử lý theo quy trình."
                        },
                        {
                            color: "green",
                            children: "Quan trắc lại sau khi xử lý để đánh giá hiệu quả."
                        }
                    ]}
                />

            </Card>

            <Divider titlePlacement="left">
                <ClockCircleOutlined /> Tiến trình xử lý
            </Divider>

            <Progress
                percent={75}
                status="active"
            />

            <Timeline
                items={[
                    {
                        color: "green",
                        children: "09:30 - Hệ thống phát hiện cảnh báo"
                    },
                    {
                        color: "green",
                        children: "09:40 - Gửi thông báo đến cán bộ phụ trách"
                    },
                    {
                        color: "blue",
                        children: "10:20 - Kiểm tra thực địa"
                    },
                    {
                        color: "orange",
                        children: "11:00 - Đang xử lý sự cố"
                    }
                ]}
            />

            <Divider titlePlacement="left">
                <HistoryOutlined /> Lịch sử xử lý
            </Divider>

            <Table
                size="small"
                rowKey="time"
                pagination={false}
                dataSource={history}
                columns={[
                    {
                        title: "Thời gian",
                        dataIndex: "time"
                    },
                    {
                        title: "Người xử lý",
                        dataIndex: "user"
                    },
                    {
                        title: "Thao tác",
                        dataIndex: "action"
                    },
                    {
                        title: "Trạng thái",
                        dataIndex: "status",
                        render: (value: string) => (
                            <Tag color={value === "Hoàn thành" ? "success" : "warning"}>
                                {value}
                            </Tag>
                        )
                    }
                ]}
            />

            <Divider titlePlacement="left">
                <UserOutlined /> Cán bộ phụ trách
            </Divider>

            <Descriptions bordered column={2}>

                <Descriptions.Item label="Họ và tên">
                    Nguyễn Văn A
                </Descriptions.Item>

                <Descriptions.Item label="Đơn vị">
                    Chi cục Thủy sản
                </Descriptions.Item>

                <Descriptions.Item label="Số điện thoại">
                    0912 345 678
                </Descriptions.Item>

                <Descriptions.Item label="Email">
                    nguyenvana@ctu.edu.vn
                </Descriptions.Item>

                <Descriptions.Item label="Trạng thái">
                    <Tag color="warning">
                        Đang theo dõi
                    </Tag>
                </Descriptions.Item>

                <Descriptions.Item label="Ghi chú">
                    Đã yêu cầu đơn vị địa phương kiểm tra và báo cáo kết quả trong ngày.
                </Descriptions.Item>

            </Descriptions>

        </Drawer>
    )
}