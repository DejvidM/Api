import React from "react";
import { Link, useParams } from "react-router-dom";

const WordColor = (props) => {
    
    const {word,color} = useParams();
    return(
        <>
            <p style={{color : word , backgroundColor : color , padding : '20px'}}>The word is : {word}</p>
            <Link to={'/'} >Go to homepage</Link>
        </>
    )
}

export default WordColor