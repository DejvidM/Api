import React, { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";

const Display = (props) => {

    const {first ,second} = useParams();
    const {api} = props;

    return (
        <>
            { first == 'people'
                ?
                    api.length > 0 && api.length < 11 && second < 10
                        ?   
                        <div style={{width : 'fit-content' , margin : '0px auto'}}>
                            <h1>Name : {api[second].name}</h1>
                            <p> Height: {api[second].height}</p>
                            <p> Hair Color : {api[second].hair_color}</p>
                            <p> Eye color : {api[second].eye_color}</p>
                            <p> Skin color : {api[second].skin_color}</p>
                            <Link to={'/'}>Refresh</Link>
                        </div>
                    : <><h1 style={{width : 'fit-content' , margin : '0px auto', marginTop : '30px' , marginBottom : '100px'}}>This arent the resouces u are looking  for</h1>
                        <Link to={'/'} style={{marginLeft: '700px' , marginTop : '500px'}}>Back</Link> </>
                : first =='planets'
                    ?
                        api.length > 0 && api.length < 11 && second < 10
                            ?
                                <div style={{width : 'fit-content' , margin : '0px auto'}}>
                                <h1>Name of Planet: {api[second].name}</h1>
                                <p> Climate: {api[second].climate}</p>
                                <p> Terrain : {api[second].terrain}</p>
                                <p> Surface Water : {api[second].surface_water}</p>
                                <p> Population : {api[second].population}</p>
                                <Link to={'/'}>Refresh</Link>
                                </div>
                            : <>
                            <h1 style={{width : 'fit-content' , margin : '0px auto', marginTop : '30px' , marginBottom : '100px'}}>
                            This arent the resources u are looking for</h1>
                            <Link to={'/'} style={{marginLeft: '700px' , marginTop : '500px'}}>Back</Link> </>
                : ''
        }
        </>
    )
}

export default Display