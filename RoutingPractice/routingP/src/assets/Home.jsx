import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = ({state,setState,color,setColor}) => {
    
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault(); 

        state && color 
        ? isNaN(state)
            ? navigate('/wordColor')
            : navigate('/number')
        : state 
            ? isNaN(state)
                ? navigate('/word')
                : navigate('/number')
        : ''
    }
    return (
        <>
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
            <label>Word or number : </label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)}/><br/>
            <label>Color : </label>
            <input type="text" value={color} onChange={e => setColor(e.target.value)}/><br />
            <input type="submit" value='Submit' />
        </form>
        </>
    )
}    
    export default Home