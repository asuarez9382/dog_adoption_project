import React, { useContext } from "react";
import AnimalCard from "./AnimalCard";
import { AnimalContext } from "../App.Context"; 

function CatList({ animalType }) {

    const  { catList } = useContext(AnimalContext);

    
    return(
        <>
            {catList.map(cat => (
                <AnimalCard 
                    key={cat.id}
                    id={cat.id}
                    name={cat.name}
                    price={cat.price}
                    image={cat.image}
                    isAdopted={cat.isAdopted}
                    animalType={animalType}
                />
            ))}
        </>
    )
}

export default CatList;