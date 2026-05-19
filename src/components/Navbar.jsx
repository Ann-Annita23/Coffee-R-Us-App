import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 shadow-sm">
            <div className="container">
                <span className="navbar-brand mb-o h1 text-warning fw-bold">Coffee R Us</span>
                <div className="navbar-nav ms-auto">
                <NavLink to="/" className={({isActive})=>`nav-link px-3 ${isActive ? 'active fw-bold text-warning':''}`}>Home</NavLink>
            
                <NavLink to="/productpage" className={({isActive})=>`nav-link px-3 ${isActive ? 'active fw-bold text-warning':''}`}>Shop</NavLink>

                <NavLink to="/admin" className={({isActive})=>`nav-link px-3 ${isActive ? 'active fw-bold text-warning':''}`}>Admin</NavLink>
                
                <NavLink to="/contact" className={({isActive})=>`nav-link px-3 ${isActive ? 'active fw-bold text-warning':''}`}>Contact</NavLink>
                 </div>
            </div>
                

        </nav>
        </>
        

        
    )
}