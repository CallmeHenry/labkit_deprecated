// "use client"
// export const columns = [
//   {
//     accessorKey: "id",
//     header: "ID"
//   },
//   {
//     accessorKey: "serial",
//     header: "Serial Number"
//   },
//   {
//     accessorKey: "status",
//     header: "Status"
//   },
//   {
//     accessorKey: "model",
//     header: "Model"
//   },
//   {
//     accessorKey: "ticket",
//     header: "Ticket"
//   }
// ]

"use client"
import { MoreHorizontal } from "lucide-react"

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu"

export const columns = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "serial",
    header: "Serial Number"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "model",
    header: "Model"
  },
  {
    accessorKey: "ticket",
    header: "Ticket"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(ticket.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>View ticket</DropdownMenuItem>
            <DropdownMenuItem>Edit computer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  // ...
]
