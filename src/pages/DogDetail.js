import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../App.Context";


function DogDetail() {

    const {id} = useParams();
    const {dogList} = useContext(AnimalContext)

    const filteredDog = dogList.filter(dog => dog.id === parseInt(id))

    const { name, image, price, isAdopted } = filteredDog

    return(
        <div className="animalCard">
            <h3>{name}</h3>
            <img src={image} alt="animal" />
            <p>Price: ${price}</p>
            <span>{isAdopted ? "Adopted" : "Available"}</span>
        </div>
    )
}

export default DogDetail;