import useFetch from "../Hooks/useFetch.jsx";
import {useState} from "react";
export default function InventoryManager(){
    const {data: coffeeList, loading}= useFetch("http://localhost:4000/coffee")

    const [editingItemId, setEditingItemId]=useState(null);
    const [editedName, setEditedName]=useState('');
    const [editedPrice, setEditedPrice]=useState('');

    //DELETE HANDLER
    const handleDelete=async(id, name)=>{
        if(window.confirm(`Are you sure you want to delete ${name} from your inventory?`)){
            try{
                const response=await fetch(`http://localhost:4000/coffee/${id}`,{method:"DELETE"})
                if(!response.ok){
                    throw new Error();
                }
                    alert("Deleted successfully!");
                    window.location.reload();
                } catch(e){
                    alert("Failed to delete the item. Please try again later.");
                }
        }// CLOSES THE IF STATEMENT
    }// CLOSES THE aSYNC FUNCTION

    //Update Handler
    const handleUpdate=async(e,id)=>{
        e.preventDefault();
        try{
            const response =await fetch(`http://localhost:4000/coffee/${id}`,{
                method:"PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({name:editedName, price: parseFloat(editedPrice) })
            });
            if(!response.ok){
                throw new Error();
            }
            alert("Updated successfully!");
            setEditingItemId(null);
            window.location.reload();
        } catch(e){
            alert("Failed to update the item. Please try again later.");
        }
    };
    if(loading) return <p>Loading inventory...</p>

    return(
        <div>
            <h2>Manage Live Inventory (Delete & Update)</h2>
            <div className="d-flex flex-column gap-2">
                {coffeeList&&coffeeList.map((coffee)=>(
                    <div key={coffee.id} className="p-3 border rounded bg-light shadow-sm ">
                        {editingItemId===coffee.id?(
                            <form onSubmit={(e)=>handleUpdate(e, coffee.id)} className="row g-2 align-items-center">
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        value={editedName}
                                        className="form-control form-control-sm"
                                        onChange={(e)=>setEditedName(e.target.value)}
                                        required/>
                                </div>

                                <div className="col-sm-5">
                                        <input
                                        type="number"
                                        step="0.01"
                                        value={editedPrice}
                                        className="form-control form-control-sm"
                                        onChange={(e)=>setEditedPrice(e.target.value)}
                                        required/>
                                </div>
                               
                               <div className="col-sm-4 d-flex gap-2">
                                    <button type="submit" className="btn btn-sm btn-success btn-sm w-50 fw-bold">Save</button>
                                    <button type="button" className="btn btn-sm btn-secondary btn-sm w-50" onClick={()=> setEditingItemId(null)}>Cancel</button>    
                               </div>
                        </form>
                                ):(
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                               <div> 
                                     <strong className="text-dark">{coffee.name}</strong>
                                    <span className="text-muted ms-2">(${coffee.price.toFixed(2)})</span>
                               </div>
                               <div className="d-flex gap-2">
                                <button onClick={()=> {
                                    setEditingItemId(coffee.id);
                                    setEditedName(coffee.name);
                                    setEditedPrice(coffee.price.toString());
                                }} className="btn btn-outline-primary btn-sm fw-bold">Edit</button>
                                <button onClick={()=> handleDelete(coffee.id, coffee.name)} className="btn btn-outline-danger btn-sm fw-bold">Delete</button>
                               </div>
                             </div>  
                          )}
                        </div>
                ))}
            </div>
    
        </div>
    );
    }//tHIS IS THE MAIN CLOSER