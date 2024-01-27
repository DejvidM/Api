import React from "react";
import { Link } from "react-router-dom";

const Number = ({state ,setState,setColor}) => {
    
    return(
        <>
            <p>The number is : {state}</p>
            <Link to={'/'} onClick={() =>{ setState(''); setColor('')}}>Return to homepage</Link>
        </>
    )
}

export default Number