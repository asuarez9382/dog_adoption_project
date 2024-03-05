import React from "react";
import { MyProvider } from "../App.Context";
import CatList from "../components/CatList";

function AdoptACat() {

    return (
    <MyProvider>
        <div className="catBox">
            <ul className="catList">
                <li>
                    <CatList />
                </li>
            </ul>
        </div>
    </MyProvider>
        
    )
}

export default AdoptACat;