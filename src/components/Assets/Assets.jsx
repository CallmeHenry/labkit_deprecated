import { useState } from 'react';
import axios from 'axios';

export default function Assets() {

    const [computer, setComputer] = useState({
        brand: null,
        model: null,
        partNumber: null
    })

    async function handleClick() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/toolkit/assets`);
        const computer = response.data;
        console.log(computer);
    }

    return (
        <div id="Assets">
            <button className="btn btn-primary" onClick={handleClick}>Fetch Model Number</button>
            {computer.model}
            {computer.partNumber}
        </div>
    )
}