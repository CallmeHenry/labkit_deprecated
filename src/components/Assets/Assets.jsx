import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { columns } from './columns';
import { DataTable } from './data-table';
import AddComputer from '../AddComputer/AddComputer';

async function getData() {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/toolkit/assets/computers`);
    return response.data.computers;
}

export default function Assets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                console.log("Fetching computers.");
                const result = await getData();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [data]);

    return (
        <div className="container mx-auto py-10 bg-white rounded-3xl mt-1 mb-1 w-[99%]">
            <div className="prose mb-4">
                <h1>Assets</h1>
            </div>
            <AddComputer />
            <DataTable columns={columns} data={data} />
        </div>
    );
}
