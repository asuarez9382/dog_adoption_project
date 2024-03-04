import React from "react";
import { MyProvider } from "../AppContext";
import CatList from "../components/CatList";

function AdoptACat() {

    return (
    <MyProvider>
        <CatList />
    </MyProvider>
        
    )
}

export default AdoptACat;