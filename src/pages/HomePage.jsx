import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function homePage(){

    const navigate=useNavigate();

    return(
        <div className="container my-5 text-center">

            <div className="p-5 text-center bg-light border rounded-3 shadow" style={{borderTop: '5px solid #6f4e37'}}>
                <h1 className="display-4 fw-bold text-dark mb-3">☕ Welcome to Coffe R us - Home Page</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted mb-4">Welcome to your ultimate artisan brewing hub! Explore our unique coffee selection.</p>
            </div>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <button onClick={()=> navigate('/productpage')} className="btn btn-warning btn-lg px-4 gap-4 fw-bold shadow-sm">🛒Browse Shop</button>
                <button onClick={()=> navigate('/admin')} className="btn btn-dark btn-lg px-4 gap-4 fw-bold shadow-sm">🛡️Admin DashBoard</button>
                <button onClick={()=> navigate('/contact')} className="btn btn-info btn-lg px-4 gap-4 fw-bold shadow-sm">📞Contact Us</button>
            </div>
        </div>
    )
}