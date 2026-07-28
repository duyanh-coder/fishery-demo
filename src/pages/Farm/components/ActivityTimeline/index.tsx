import {
    Card,
    Timeline,
    Tag,
} from "antd";

import {
    CheckCircleOutlined,
    ExperimentOutlined,
    InboxOutlined,
    AuditOutlined,
} from "@ant-design/icons";

import type { Activity } from "../../types";

interface Props {
    data: Activity[];
}

const iconMap = {
    STOCKING: <InboxOutlined />,

    HARVEST: <CheckCircleOutlined />,

    INSPECTION: <AuditOutlined />,

    WATER: <ExperimentOutlined />,
};

const colorMap = {
    STOCKING: "blue",

    HARVEST: "green",

    INSPECTION: "orange",

    WATER: "cyan",
};

export default function ActivityTimeline({
    data,
}: Props) {

    return (

        <Card title="Lịch sử hoạt động">

            <Timeline

                items={data.map(item => ({

                    color: colorMap[item.type],

                    dot: iconMap[item.type],

                    children: (

                        <>

                            <Tag color={colorMap[item.type]}>
                                {item.date}
                            </Tag>

                            <div
                                style={{
                                    fontWeight: 600,
                                    marginTop: 8,
                                }}
                            >
                                {item.title}
                            </div>

                            <div>
                                {item.description}
                            </div>

                        </>

                    ),

                }))}

            />

        </Card>

    );

}