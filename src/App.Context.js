import React, { useState, useEffect } from 'react';


const AnimalContext = React.createContext();



const MyProvider = ({ children }) => {
  
  const [dogList, setDogList] = useState( []); 
  const [catList, setCatList] = useState([]); 
  const [dogForm, setDogForm] = useState(false);
  const [catForm, setCatForm] = useState(false)
  const [addDogText, setAddDogText] = useState("Add Dog to Adoption List")
  const [addCatText, setAddCatText] = useState("Add Cat to Adoption List")

  
  
  useEffect(() => {
    fetch("http://localhost:3000/dogs")
        .then(res => res.json())
        .then(dogData => {
            setDogList(dogData)
        })

    fetch("http://localhost:3000/cats")
      .then(res => res.json())
      .then(catData => {
        setCatList(catData)
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
            setAddDogText,
            addCatText,
            setAddCatText,
            catForm,
            setCatForm}
        }    
    >
        { children }
    </AnimalContext.Provider>
  );
};

export { MyProvider, AnimalContext}; 