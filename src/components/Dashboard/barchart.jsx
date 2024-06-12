import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const BarChartAssets = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Attempting to get total number of computers.');
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/toolkit/assets/test`
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
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <XAxis dataKey="name" stroke="#4498F7" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#4498F7" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartAssets;
