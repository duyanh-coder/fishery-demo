import { Button, Card, Space, Table, Tag, Tooltip } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { RecentReport } from "../Dashboard/types";
import { panelHeaderStyleSuccess, panelStyle } from "@/theme/panel";

interface Props {
  data: RecentReport[];
  loading?: boolean;
  onView?: (row: RecentReport) => void;
  onDownload?: (row: RecentReport) => void;
}
export default function RecentReportTable({
  data,
  loading,
  onView,
  onDownload,
}: Props) {
  const columns: ColumnsType<RecentReport> = [
    {
      title: "Tên báo cáo",
      dataIndex: "reportName",
    },

    {
      title: "Loại",
      dataIndex: "type",
      width: 150,
      render: (value: string) => <Tag color="blue">{value}</Tag>,
    },

    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      width: 130,
    },

    {
      title: "Người tạo",
      dataIndex: "createdBy",
      width: 140,
    },

    {
      title: "Định dạng",
      dataIndex: "format",
      width: 120,
      align: "center",
      render: (value: string) => <Tag color="green">{value}</Tag>,
    },

    {
      title: "Thao tác",
      width: 120,
      align: "center",

      render: (_, record) => (
        <Space>
          <Tooltip title="Xem">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => onView?.(record)}
            />
          </Tooltip>

          <Tooltip title="Tải xuống">
            <Button
              type="text"
              icon={<DownloadOutlined />}
              onClick={() => onDownload?.(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <Card
      {...panelHeaderStyleSuccess}
      style={{ ...panelStyle, height: "100%" }}
      loading={loading}
      title="Báo cáo gần đây"
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}

        scroll={{
          x: 900,
        }}
      />
    </Card>
  );
}
