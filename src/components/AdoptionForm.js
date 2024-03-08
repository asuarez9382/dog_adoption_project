import React, { useState, useContext } from "react";
import { AnimalContext } from "../App.Context"; 



function AdoptionForm({ animalType }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    

    const { dogList, setDogList, catList, setCatList } = useContext(AnimalContext)

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch(`http://localhost:3000/${animalType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                image: image,
                price: parseInt(price),
                isAdopted: false,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('New dog data:', data);
            if(animalType === 'dogs') {
                return setDogList([...dogList, data])
            }
            else if(animalType === 'cats') {
                return setCatList([...catList, data])
            }

        })
        .catch(error => {
            console.error('Error adding new dog:', error);
        });


    }



    return(
        <div className="form-container">
            <form className="add-animal-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" className="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" className="input-field" value={image} onChange={(e) => setImage(e.target.value)} required />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" className="input-field" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <br />
                <button className="add-btn" type="submit">Add Pet</button>
            </form>
        </div>
        

  );
}


export default AdoptionForm ;

//Add PUT request functionality and figure out what to do with imageClick