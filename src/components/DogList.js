import React, { useContext } from "react";
import AnimalCard from "./AnimalCard";
import { AnimalContext } from "../App.Context"; 

function DogList() {

    const  { dogList }  = useContext(AnimalContext);

    console.log(dogList)

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
                />
            ))}
        </>
    )
}

export default DogList;