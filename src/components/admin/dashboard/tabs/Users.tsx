import { useTranslation } from "react-i18next";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../../ui/datatable";
import { Button } from "../../..//ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

type Payment = {
  id: string;
  name: string;
  creator_email: string;
  type: "family" | "flatsharing";
  forfeit: "free" | "subscription" | "purchased";
  registration_date: Date;
  actions: { label: string; action: () => void }[];
};

const payments: Payment[] = [
  {
    id: "1",
    name: "Le Carré",
    creator_email: "cyril@lecarré.com",
    type: "flatsharing",
    forfeit: "subscription",
    registration_date: new Date("2021-02-04"),
    actions: [
      { label: "Edit", action: () => {} },
      { label: "Delete", action: () => {} },
    ],
  },
  {
    id: "2",
    name: "Les Mousquetaires",
    creator_email: "john@lesmousquetaire.fr",
    type: "family",
    forfeit: "free",
    registration_date: new Date("2021-01-01"),
    actions: [
      { label: "Edit", action: () => {} },
      { label: "Delete", action: () => {} },
    ],
  },
  // ...
];

function getData(): Payment[] {
  // Fetch data from your API here.
  return payments;
}

function AdminDashboardUsers() {
  const { t, i18n } = useTranslation();

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {" "}
            <div>{t("Family/Group name")}</div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "creator_email",
      header: () => <div>{t("Creator's email")}</div>,
    },
    {
      accessorKey: "type",
      header: () => <div>{t("Type")}</div>,
      cell: ({ row }) => {
        return (
          <div className="capitalize">{t(row.getValue("type") as string)}</div>
        );
      },
    },

    {
      accessorKey: "forfeit",
      header: () => <div>{t("Forfeit")}</div>,
      cell: ({ row }) => {
        return (
          <div className="capitalize">
            {t(row.getValue("forfeit") as string)}
          </div>
        );
      },
    },

    {
      accessorKey: "registration_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {" "}
            <div>{t("Registration Date")}</div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = row.getValue("registration_date");
        return <div className="capitalize">{t("dates.long", { date })}</div>;
      },
    },

    {
      id: "actions",
      header: () => <div>{t("Actions")}</div>,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t("Actions")}</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                {t("Copy ID")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t("View customer")}</DropdownMenuItem>
              <DropdownMenuItem>{t("View payment details")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const data = getData();

  return (
    <div className="w-full h-full py-16">
      <DataTable columns={columns} data={data} />
    </div>
  );
}


export default AdminDashboardUsers;
