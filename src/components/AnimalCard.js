import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../App.Context";


function AnimalCard({ id, name, image, price, isAdopted, animalType }){

    const { setCatList, setDogList } = useContext(AnimalContext)

    useEffect(() => {
        fetch("http://localhost:3000/dogs")
            .then(res => res.json())
            .then(dogData => {
                setDogList(dogData)
            })
    
        fetch("http://localhost:3000/cats")
          .then(res => res.json())
          .then(catData => {
            setCatList(catData)
          })
        }, [isAdopted])

    function handleImageClick() {
        console.log("clicked")
        console.log(animalType)

    }

    function handleClick() {
        console.log("clicked")

        fetch(`http://localhost:3000/${animalType}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            
            },
            body: JSON.stringify({ isAdopted: true }), 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            
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

