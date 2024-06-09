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
import { columns } from './columns';
import { DataTable } from './data-table';

async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: '728ed52f',
            amount: 100,
            status: 'pending',
            email: 'm@example.com',
        },
        // ...
    ];
}

export default function Assets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
