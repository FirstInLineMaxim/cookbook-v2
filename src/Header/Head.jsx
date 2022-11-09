import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import './Head.css'


function Head () {
    return (
        <div className="Header">
        <NavLink to="main" >main</NavLink>
    <NavLink to="/" >App</NavLink>
    <NavLink to="main/:food" >food?</NavLink> 
    </div>
    );
}

export default Head ;