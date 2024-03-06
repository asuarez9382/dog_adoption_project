import React, { useState, useEffect } from 'react';


const AnimalContext = React.createContext();



const MyProvider = ({ children }) => {
  const [dogList, setDogList] = useState( []); 
  const [catList, setCatList] = useState([]); 
  const [dogForm, setDogForm] = useState(false);
  const [addDogText, setAddDogText] = useState("Add Dog to Adoption List")

  useEffect(() => {
    fetch("http://localhost:3000/pets")
        .then(res => res.json())
        .then(petData => {
            setDogList(petData["dogs"])
            setCatList(petData["cats"])
        })
    }, [])

  return (
    <AnimalContext.Provider
        value={ { 
            dogList, 
            setDogList, 
            catList, 
            setCatList,
            dogForm,
            setDogForm,
            addDogText,
            setAddDogText } }    
    >
        { children }
    </AnimalContext.Provider>
  );
};

export { MyProvider, AnimalContext}; // Exporting the contexts to be used elsewhere
