import BarChartAssets from "./barchart.jsx"
import PieChartAssets from "./piechart.jsx"
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Attempting to get total number of computers.');
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/toolkit/assets/dashboard`
                );
                console.log(`Successfully retrieved total number of computers: ${response.data.value}`);
                setData([response.data]);
                console.log('Data:', data);
            } catch (error) {
                console.error('Error trying to get total number of computers:', error);
            }
        };

        const timeout = setTimeout(fetchData, 20);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div id="Dashboard" className="flex flex-col justify-center items-center h-2/3 container mx-auto py-10 bg-white rounded-3xl mt-1 mb-1 w-[99%]">

            <div className="prose">
                <h1 className="mb-5">Dashboard</h1>
            </div>
            {data.length > 0 ? (
                <div className="flex flex-row w-full h-full">
                    <div className="w-1/2 h-full">
                        <BarChartAssets data={data} />
                    </div>
                    <div className="w-1/2 h-full">
                        <PieChartAssets data={data} />
                    </div>
                </div>
            ) : (
                <div className='prose'>
                    <h2>No devices found.</h2>
                </div>
            )}



        </div>
    )
}