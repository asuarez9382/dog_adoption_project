import React, { useContext } from "react";
import { MyProvider } from "../App.Context";
import { AnimalContext } from "../App.Context"; 
import CatList from "../components/CatList";
import AdoptionForm from "../components/AdoptionForm";

function AdoptACat() {

    const { catForm, setCatForm, addCatText, setAddCatText } = useContext(AnimalContext)

    function handleClick() {
        setCatForm(!catForm)
        if(addCatText === "Add Cat to Adoption List") {
            setAddCatText("^")
        }
        else {
            setAddCatText("Add Cat to Adoption List")
        }
    }

    return (            
        <MyProvider>
            
            <div className="btn-container">
                <button className="add-cat-btn" onClick={handleClick}>{addCatText}</button>
            </div>
            { catForm ? <AdoptionForm/> : ''}
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