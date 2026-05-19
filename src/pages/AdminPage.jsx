import React, { useState, useId } from 'react'
import InventoryManager from '../components/InventoryManager';

export default function AdminPage(){

//Generation of unique IDs for our form elements to ensure accessibility and proper association between labels and inputs
    const nameId=useId();
    const descriptionId=useId();
    const priceId=useId();
    const originId=useId();
//Local state to track what the user types into each input field
const [name, setName]=useState('');
const [description, setDescription]=useState('');
const [price, setPrice]=useState('');
const [origin, setOrigin]=useState('');

//Event Handlers:The submit button


const handleSubmit= async (e)=>{
    e.preventDefault();


//Create a new item that object from our states
const newCoffeeItem={
    name,
    description,
    price: parseFloat(price), // Convert price to a number
    origin
};
console.log("New Coffee Item:", newCoffeeItem);


//The POST REQUEST: This is where we send the new coffee item to the server. We use the fetch API to make a POST request to our backend endpoint, sending the new coffee item as JSON in the request body. We also handle the response and any potential errors that may occur during the request.
try{
    const response=await fetch("http://localhost:4000/coffee",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newCoffeeItem)
    });

    if(!response.ok){
        throw new Error(`Failed to create item.Status:${response.status}`)
    }

    const savedData=await response.json();
    console.log("Saved Coffee Item:", savedData);

// clear out form inputs after successful submission
    setName('');
    setDescription('');
    setPrice('');
    setOrigin('');
    
    alert(`${newCoffeeItem.name} has been added to your shop selection successfullly`);
    } catch (error){
    console.error("Error submitting product:",error);
    alert("Could not add the coffee item. Please try again later.");
    }
}; 

    return(
        <div className="container my-4" style={{maxWidth:'800px'}}>
            <div className="card shadow-sm m-5 border border-warning-subtle">
                <div className="card-header bg-warning text-dark fw-bold h4 m-0 py-3">
                   Add New Coffee to Inventory
                    </div>
                    <div className="card-body">
                 <form onSubmit={handleSubmit}>
                 <div className="row g-3">
                     <div className="col-md-6">
                        {/*Name Input*/}
                    <label htmlFor={nameId} className="form-label fw-bold"><strong>Coffee Name:</strong></label>
                    <input
                    id={nameId}
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    </div>

                    <div className="col-md-6">
                        {/*Origin Input*/}
                
                    <label htmlFor={originId} className="form-label fw-bold"><strong>Origin:</strong></label>
                    <input
                    id={originId}
                    type="text"
                    className="form-control"
                    value={origin}
                    onChange={(e)=>setOrigin(e.target.value)}
                    required/>
                    </div>

                    {/*Price Input*/}
                    <div>
                    <label htmlFor={priceId} className="form-label fw-bold"><strong>Price:</strong></label>
                    <input
                    id={priceId}
                    type="number"
                    className="form-control"
                    step="0.01"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    required
                    />
                    </div>
                  
                     <div className="col-12">
                    <label htmlFor={descriptionId} className="form-label fw-bold"><strong>Description:</strong></label>
                    <input
                    id={descriptionId}
                    className="form-control"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required
                    />
                    </div>
             </div>
                    <button type="submit" className="btn btn-warning w-100 fw-bold mt-4 shadow-sm">Add Coffee</button>
                    </form>
                </div>
            </div>
    <InventoryManager/>
    </div> 
       );
}
