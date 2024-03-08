import React, { useContext } from "react";
import AnimalCard from "./AnimalCard";
import { AnimalContext } from "../App.Context"; 

function DogList({ animalType }) {

    const  { dogList }  = useContext(AnimalContext);

    

    return(
        <>
            {dogList.map(dog => (
                <AnimalCard 
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    price={dog.price}
                    image={dog.image}
                    isAdopted={dog.isAdopted}
                    animalType={animalType}
                />
            ))}
        </>
    )
}

export default DogList;