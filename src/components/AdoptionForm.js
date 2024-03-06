import React, { useState } from "react";



function AdoptionForm() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [isAdopted, setIsAdopted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name,image,price)
    }


    return(
        <div className="dog-form-container">
            <form className="add-dog-form" onSubmit={handleSubmit}>
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
                <button className="add-dog-btn" type="submit">Add Dog</button>
            </form>
        </div>
        

  );
}


export default AdoptionForm ;