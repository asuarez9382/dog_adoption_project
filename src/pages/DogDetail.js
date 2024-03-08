import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../App.Context";


function DogDetail() {

    const {id} = useParams();
    const {dogList} = useContext(AnimalContext)

    const filteredDog = dogList.filter(dog => dog.id === parseInt(id))

    return(
        <div className="animalCard">
            <h3>{filteredDog[0].name}</h3>
            <img src={filteredDog[0].image} alt="animal" />
            <p>Price: ${filteredDog[0].price}</p>
            <span>{filteredDog[0].isAdopted ? "Adopted" : "Available"}</span>
        </div>
    )
}

export default DogDetail;