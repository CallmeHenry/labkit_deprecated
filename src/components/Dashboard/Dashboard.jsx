import BarChartAssets from "./barchart.jsx"
import PieChartAssets from "./piechart.jsx"
export default function Dashboard() {
    return (
        <div id="Dashboard" className="flex flex-col justify-center items-center h-2/3 container mx-auto py-10 bg-white rounded-3xl mt-1 mb-1 w-[99%]">
            
                <div className="prose">
                    <h1 className="mb-5">Dashboard</h1>
                </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full">
                    <BarChartAssets />
                </div>
                <div className="w-1/2 h-full">
                    <PieChartAssets />
                </div>
            </div>


        </div>
    )
}