import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, Trash } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Props = {
  onDelete: (id: string) => void;
};

export const getServiceColumns = ({
  onDelete,
}: Props): ColumnDef<any>[] => [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        const user = row.original;

        return user.image ? (
          <img
            src={"/api" + user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;

        return status === "ACTIVE" ? (
          <Badge className="bg-green-500">ACTIVE</Badge>
        ) : (
          <Badge variant="destructive">INACTIVE</Badge>
        );
      },
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => <div className="flex gap-2">
        <Button
          asChild
          size="icon"
          className="bg-orange-500 hover:bg-orange-600"
        >
          <Link href={`/admin/service/edit/${row.original.id}`}>
            <EditIcon size={16} />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="destructive"
          className="cursor-pointer"
          onClick={() => onDelete(row.original.id)}
        >
          <Trash size={16} />
        </Button>
      </div>,
    },
  ];
