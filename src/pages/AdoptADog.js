import React, { useContext } from "react";
import DogList from "../components/DogList";
import { MyProvider } from "../App.Context";
import AdoptionForm from "../components/AdoptionForm";
import { AnimalContext } from "../App.Context";
 

function AdoptADog() {

    const { dogForm, setDogForm, addDogText, setAddDogText } = useContext(AnimalContext)


    function handleClick() {
        setDogForm(!dogForm)
        if(addDogText === "Add Dog to Adoption List") {
            setAddDogText("^")
        }
        else {
            setAddDogText("Add Dog to Adoption List")
        }
    }

    return (            
        <MyProvider>
            
            <div className="btn-container">
                <button className="add-dog-btn" onClick={handleClick}>{addDogText}</button>
            </div>
            { dogForm ? <AdoptionForm animalType="dogs"/> : ''}
            <div className="dogBox">
                <ul className="dogList">
                    <li>
                        <DogList animalType="dogs" />
                    </li>
                    
                </ul>
            </div>
        </MyProvider>
    )
}

export default AdoptADog;