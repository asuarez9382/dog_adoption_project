import React from "react";


function AnimalCard({ id, name, image, price, isAdopted, animalType }){


    function handleImageClick() {
        console.log("clicked")
        console.log(animalType)

    }

    function handleClick() {
        console.log("clicked")
    }

    return(
        <div className="animalCard">
            <h3>{name}</h3>
            <img src={image} alt="animal picture" onClick={handleImageClick} />
            <p>Price: ${price}</p>
            <span>{isAdopted? 'Adopted' : 'Available'}</span>
            <div className="btn-container">
                <button className="adopt-btn" onClick={handleClick}>Adopt {name}</button>
            </div>
        </div>
    )
}

export default AnimalCard;