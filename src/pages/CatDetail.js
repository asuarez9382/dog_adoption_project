import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../App.Context";

function CatDetail() {

    const {id} = useParams();
    const {catList} = useContext(AnimalContext)

    const filteredCat = catList.filter(cat => cat.id === parseInt(id))

    return(
        <div className="pet-container">
            <div className="pet-details">
                <h3 className="pet-name">{filteredCat[0].name}</h3>
                <img src={filteredCat[0].image} alt="animal" className="pet-image"/>
                <h4 className="pet-price">Price: ${filteredCat[0].price}</h4>
            </div>
            <p className="pet-paragraph"> 
            &nbsp;&nbsp;&nbsp;&nbsp;{filteredCat[0].name} is a charming and elegant cat with a luxurious coat of fur that glistens in the sunlight. With a graceful demeanor and playful spirit, {filteredCat[0].name} enjoys lounging by the window, basking in the warmth, and observing the world outside with curiosity. This affectionate feline delights in gentle chin scratches and cozy cuddle sessions, making them a cherished companion for anyone seeking a loyal and loving pet. Whether chasing feather toys or simply lounging in a sunbeam, {filteredCat[0].name} brings joy and comfort to their forever home.
            </p>
        </div>
    )
}

export default CatDetail;