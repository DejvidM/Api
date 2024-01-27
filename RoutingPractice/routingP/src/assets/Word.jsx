import React from "react";
import { Link } from "react-router-dom";


const Word = ({state ,setState}) => {
    
    
    return(
        <>
            <p> The word is : {state}</p>
            <Link to={'/'} onClick={() => setState('')}>Return to homepage</Link>
        </>
    )
}

export default Word