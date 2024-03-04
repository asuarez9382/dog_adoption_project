import React, { useContext } from "react";
import AnimalCard from "./AnimalCard";
import { AnimalContext } from '../AppContext'; // Adjust the import path accordingly


function CatList() {

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
                />
            ))}
        </>
    )
}

export default CatList;