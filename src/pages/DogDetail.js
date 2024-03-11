import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../App.Context";


function DogDetail() {

    const {id} = useParams();
    const {dogList} = useContext(AnimalContext)

    const filteredDog = dogList.filter(dog => dog.id === parseInt(id))

    return(
        <div className="pet-container">
            <div className="pet-details">
                <h3 className="pet-name">{filteredDog[0].name}</h3>
                <img src={filteredDog[0].image} alt="animal" className="pet-image"/>
                <h4 className="pet-price">Price: ${filteredDog[0].price}</h4>
            </div>
            <p className="pet-paragraph">{filteredDog[0].name} is a friendly and energetic dog with a playful personality. {filteredDog[0].name} loves long walks in the park, chasing after tennis balls, and cuddling up with their favorite humans. 
                With their loyal and affectionate demeanor, {filteredDog[0].name} makes a wonderful companion for active individuals and families alike
            </p>
        </div>



    )
}

export default DogDetail;

//Add general details about the dogDetail and catDetail pages