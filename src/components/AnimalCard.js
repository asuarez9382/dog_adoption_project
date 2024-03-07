import React from "react";


function AnimalCard({ id, name, image, price, isAdopted, animalType }){


    function handleImageClick() {
        console.log("clicked")
        console.log(animalType)

    }

    function handleClick() {
        console.log("clicked")

        fetch(`http://localhost:3000/pets/${animalType}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            // Add any additional headers if needed
            },
            body: JSON.stringify({ isAdopted: true }), // Update isAdopted to true
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            // Handle updated data from the server
            console.log('Updated animal data:', data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error updating animal data:', error);
        });

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

//Figure out how to get the routes for the database postman perhaps?