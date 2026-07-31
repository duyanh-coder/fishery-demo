import { Space } from "antd";

import FarmStatistic from "@/components/aquaculture/FarmStatistic";
import FarmFilter from "@/components/aquaculture/FarmFilter";
import FarmTable from "@/components/aquaculture/FarmTable";

import { useMemo, useState } from "react";

import { farmList } from "@/mock/farm";
import type { FarmFilter as FarmFilterType } from "@/types/farm";

import "./style.scss";

export default function FarmPage() {
  const [filter, setFilter] = useState<FarmFilterType>({
    keyword: "",
  });
  const data = useMemo(() => {
    return farmList.filter((item) => {
      if (
        filter.keyword &&
        !item.name.toLowerCase().includes(filter.keyword.toLowerCase()) &&
        !item.code.toLowerCase().includes(filter.keyword.toLowerCase())
      ) {
        return false;
      }

      if (filter.ward && item.ward !== filter.ward) {
        return false;
      }

      if (filter.species && item.species !== filter.species) {
        return false;
      }

      if (filter.status && item.status !== filter.status) {
        return false;
      }

      return true;
    });
  }, [filter]);
  return (
    <Space
      orientation="vertical"
      size={16}
      style={{
        width: "100%",
      }}
    >
      <FarmStatistic />

      <FarmFilter
        value={filter}
        onChange={setFilter}
        onReset={() =>
          setFilter({
            keyword: "",
          })
        }
        onAdd={() => console.log("Add")}
        onExport={() => console.log("Export")}
      />

      <FarmTable data={data} />
    </Space>
  );
}
