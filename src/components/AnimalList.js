import React from "react";
import DogList from "./DogList";
import CatList from "./CatList";


function AnimalList() {

    

    return(
        <div className="animalContainer">
            <div className="dogBox">
                <ul className="dogList">
                    <li>
                        <DogList animalType="dogs"/>
                    </li>
                    
                </ul>
            </div>
            <div className="catBox">
                <ul className="catList">
                    <li>
                        <CatList animalType="cats"/>
                    </li>
                </ul>
            </div>
        </div>   
    )
}

export default AnimalList;