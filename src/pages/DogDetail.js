import React from "react";
import { useParams } from "react-router-dom"; 

function DogDetail() {

    const params = useParams();

    return(
        <h1>Dog Details</h1>
    )
}

export default DogDetail;