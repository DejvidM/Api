import React, { useEffect, useState } from "react";
import axios from 'axios';

const Component = () => {
    const [names , setNames ] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=806")
            .then(response => setNames(response.data.results))
    }, []);
    return (
        <>
            <ol>
                {names.map((item , index) => 
                    <li key={index}>{item.name}</li>
                )}
            </ol>
        </>
    )
}

export default Component