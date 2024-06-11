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
import { useState } from 'react';
import axios from 'axios';
import EditComputer from '../EditComputer/EditComputer';

const baseUrl = import.meta.env.VITE_API_URL;
async function deleteComputer(serial) {
  try {
    console.log(`Attempting to delete ${serial}`);
    await axios.delete(`${baseUrl}/toolkit/assets/computers/${serial}`);
    console.log(`${serial} successfully deleted.`);
    return;
  } catch (error) {
    console.log(`Unable to delete ${serial}`);
    console.error(error);
    return;
  }

}

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
      const rowObj = row.original
      const [showEditComputer, setShowEditComputer] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(rowObj.serial)}
              >
                Copy Serial Number
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(rowObj.model)}
              >
                Copy Model
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View ticket</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setShowEditComputer(true) }}>Edit computer</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { deleteComputer(rowObj.serial) }}>Delete computer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {showEditComputer ? <EditComputer serialProp={rowObj.serial} setShowEditComputer={setShowEditComputer} /> : ""}
        </>
      )
    }
  }
  // ...
]
