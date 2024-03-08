import React, { useContext } from "react";
import { useParams } from "react-router-dom";


function DogDetail() {

    const {id} = useParams();

    return(
        <h1>Dog Details: {id} </h1>
    )
}

export default DogDetail;