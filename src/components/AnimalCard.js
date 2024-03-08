import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../App.Context";
import { Link } from "react-router-dom";

function AnimalCard({ id, name, image, price, isAdopted, animalType }) {
  const { catList, setCatList, dogList, setDogList } = useContext(AnimalContext);

  //Updates the catList and dogList whenever the adopt button is pressed
  useEffect(() => {
    if (animalType === "dogs") {
      fetch("http://localhost:3000/dogs")
        .then((res) => res.json())
        .then((dogData) => {
          setDogList(dogData);
        });
    } else if (animalType === "cats") {
      fetch("http://localhost:3000/cats")
        .then((res) => res.json())
        .then((catData) => {
          setCatList(catData);
        });
    }
  }, [setCatList,setDogList]);


  //Performs a PATCH request updating the database to show isAdopted = true for the animal clicked
  function handleClick() {

    //Updates the database and the dogList or catList
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
        //Updates the dog list of the particular dog
        if (animalType === 'dogs') {
            const updatedDogList = dogList.map((dog) => {
                if (dog.id === data.id) {
                    // Update the isAdopted property of the matching dog
                    return { ...dog, isAdopted: true };
                }
                return dog; // Return unchanged dog objects
            });
            setDogList(updatedDogList); // Update the dogList state with the updated array
        }
        //Updates the cat list of the particular cat
        else if (animalType === 'cats') {
            const updatedCatList = catList.map((cat) => {
                if (cat.id === data.id) {
                    // Update the isAdopted property of the matching dog
                    return { ...cat, isAdopted: true };
                }
                return cat; // Return unchanged dog objects
            });
            setCatList(updatedCatList); // Update the dogList state with the updated array
        }
        
    })
    .catch(error => {
            // Handle errors
        console.error('Error updating animal data:', error);
    });  
  }

  return (
    <div className="animalCard">
      <h3>{name}</h3>
      <Link to={`/${animalType}/${id}`}>
        <img src={image} alt="animal" />
      </Link>
      <p>Price: ${price}</p>
      <span>{isAdopted ? "Adopted" : "Available"}</span>
      <div className="btn-container">
        <button className="adopt-btn" onClick={handleClick}>
          Adopt {name}
        </button>
      </div>
    </div>
  );
}

export default AnimalCard;


