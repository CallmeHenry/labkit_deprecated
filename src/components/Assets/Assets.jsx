// import { useState } from 'react';
// import axios from 'axios';

// export default function Assets() {

//     // const [computer, setComputer] = useState({
//     //     brand: null,
//     //     model: null,
//     //     partNumber: null
//     // })

//     // async function handleClick() {
//     //     const response = await axios.get(`${import.meta.env.VITE_API_URL}/toolkit/assets`);
//     //     const computer = response.data;
//     //     console.log(computer);
//     // }

//     return (
//         <div id="Assets">
//             {/* <button className="btn btn-primary" onClick={handleClick}>Fetch Model Number</button>
//             {computer.model}
//             {computer.partNumber} */}


//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { columns } from './columns';
import { DataTable } from './data-table';
import AddComputer from '../AddComputer/AddComputer';

async function getData() {
    // // Fetch data from your API here.
    // return [
    //     {
    //         id: "728ed52f",
    //         serial: "123",
    //         status: "WIP",
    //         model: "Asus Model 1",
    //         ticket: "1"
    //     },
    //     // ...
    // ];

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
    }, []);

    return (
        <div className="container mx-auto py-10">
            <AddComputer />
            <DataTable columns={columns} data={data} />
        </div>
    );
}
