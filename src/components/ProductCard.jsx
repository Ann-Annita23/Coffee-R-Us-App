import React from 'react';
 export default function ProductCard({coffee}){
    return(
        <div className="card h-100 shadow-sm border border-secondary-subtle">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="card-title h5 text-dark m-0 fw-bold">☕{coffee.name}</h3>
                        <span className="badge bg-warning text-dark px-2 py-1 rounded-pill">📍 {coffee.origin}</span>
                    </div>
                    <p className="card-text text-muted small mt-3">{coffee.description}</p>
                    </div>

                        
                     <div className="d-flex justify-content-between align-items-center mt-4">
                         <span className="h5 text-success fw-bold m-0">${coffee.price.toFixed(2)}</span>
                        <button className="btn btn-outline-dark btn-sm fw-bold shadow-sm" onClick={()=>alert(`🛒 ${coffee.name} has been added to your cart!`)}>Add to Cart</button>
                    
                </div>
            </div>
            
        </div>
    )
 }