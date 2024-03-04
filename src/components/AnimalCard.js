import React from "react";

function AnimalCard({ id, name, image, price, isAdopted }){


    return(
        <div className="animalCard">
            <h3>{name}</h3>
            <img src={image} alt="animal picture"/>
            <p>Price: ${price}</p>
            <span>{isAdopted? 'Adopted' : 'Available'}</span>
        </div>
    )
}

export default AnimalCard;