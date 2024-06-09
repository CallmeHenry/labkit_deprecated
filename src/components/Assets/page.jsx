import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      status: "WIP",
      model: "Asus Model 1",
      ticket: "1"
    }
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
