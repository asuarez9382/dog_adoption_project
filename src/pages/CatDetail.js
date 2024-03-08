import React from "react";
import { useParams } from "react-router-dom";

function CatDetail() {

    const {id} = useParams();

    return(
        <h1>Cat Details {id}</h1>
    )
}

export default CatDetail;