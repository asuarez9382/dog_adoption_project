import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../App.Context";

function CatDetail() {

    const {id} = useParams();
    const {catList} = useContext(AnimalContext)

    const filteredCat = catList.filter(cat => cat.id === parseInt(id))

    return(
        <div className="animalCard">
            <h3>{filteredCat[0].name}</h3>
            <img src={filteredCat[0].image} alt="animal" />
            <p>Price: ${filteredCat[0].price}</p>
            <span>{filteredCat[0].isAdopted ? "Adopted" : "Available"}</span>
        </div>
    )
}

export default CatDetail;