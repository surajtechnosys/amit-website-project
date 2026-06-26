import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EditIcon, Trash } from "lucide-react";
import Link from "next/link";
import SingleEnquiry from "./enquiry";

type Props = {
  onDelete: (id: string) => void;
};


export const getEnquiryColumns = ({
  onDelete,
}: Props): ColumnDef<any>[] => [
    {
      accessorKey: "fullName",
      header: "First Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
    }, 
    {
      accessorKey: "companyName",
      header: "Company Name",
    }, 
    {
      accessorKey: "subject",
      header: "Subject",
    }, 
    {
      accessorKey: "message",
      header: "Message",
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => {

        return (
          <SingleEnquiry id={row.original.id as string} />
        );
      },
    },
  ];