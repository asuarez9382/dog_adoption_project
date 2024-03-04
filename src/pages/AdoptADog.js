import React from "react";
import DogList from "../components/DogList";
import { MyProvider } from "../AppContext";

function AdoptADog() {


    return (            
        <MyProvider>
            <DogList />
        </MyProvider>
    )
}

export default AdoptADog;