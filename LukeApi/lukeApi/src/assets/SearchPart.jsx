import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPart = ({id , setID, info , setInfo,setApi}) =>{
    const navigate = useNavigate();    

    const handleButton = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${info}/`)
            .then(response => setApi(response.data.results))
            .catch(err => console.log('error'))
        navigate(`/${info}/${id}`);
    }

    return (
        <>
            <form onSubmit={handleButton}>
            <label>Search for : </label>
            <select defaultValue={info} onChange={(e) => setInfo(e.target.value)}>
            <option>people</option>
            <option>planets</option>
            </select>
            <label>ID(max = 9) : </label>
            <input type="text" value={id} onChange={(e) => setID(e.target.value)}/>
            <button>Search</button>
            </form>
        </>
    )
}

export default SearchPart