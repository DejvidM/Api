import React from "react";
import { Link } from "react-router-dom";

const WordColor = ({state,setState,color,setColor}) => {
    
    return(
        <>
            <p style={{color : state , backgroundColor : color , padding : '20px'}}>The word is : {state}</p>
            <Link to={'/'} onClick={() => {setColor(''); setState('')}}>Go to homepage</Link>
        </>

    )
}

export default WordColor