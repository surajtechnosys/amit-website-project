"use client";

import { useState } from "react";

import { DataTable } from "@/components/data-table";

import { getCareerColumns } from "./career-columns";

export default function CareerTable({
  data,
  title,
  actions
}: any) {
  const [tableData, setTableData] = useState(data);

  const columns = getCareerColumns();

  return <DataTable data={tableData} columns={columns} title={title} actions={actions} />;
}
