import React from "react";
import { Link, useParams } from "react-router-dom";

const Number = ({state ,setState,setColor},props) => {
    
    const {numberorword} = useParams();
    return(
        <>
            <p>The {isNaN(numberorword) ?'word' : 'number'} is : {numberorword}</p>
            <Link to={'/'}>Return to homepage</Link>
        </>
    )
}

export default Number