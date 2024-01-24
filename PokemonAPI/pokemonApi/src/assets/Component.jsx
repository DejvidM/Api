import React, { useEffect, useState } from "react";

const Component = () => {
        const [names ,setNames] = useState([]);
        
        useEffect(()=> {
            fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=806")
        .then(response => {
            return response.json();
        })
        .then(response => {
            setNames(response.results);
        })
        .catch(err => {
            console.log(err);
        })

        },[setNames])
    return (
        <>
            <ol>        
                {names.map((item,index) => 
                    <div key={index}><li >{item.name}</li></div>
                )}
            </ol>
        </>
    )
}

export default Component
