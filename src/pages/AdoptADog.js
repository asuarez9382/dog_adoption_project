import React from "react";
import DogList from "../components/DogList";
import { MyProvider } from "../App.Context";

function AdoptADog() {


    return (            
        <MyProvider>
            <div className="dogBox">
                <ul className="dogList">
                    <li>
                        <DogList />
                    </li>
                    
                </ul>
            </div>
        </MyProvider>
    )
}

export default AdoptADog;