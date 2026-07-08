import { ColumnDef } from "@tanstack/react-table";
import SingleApplication from "./career";

export const getCareerColumns = (): ColumnDef<any>[] => [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <SingleApplication id={row.original.id as string} />,
  },
];
