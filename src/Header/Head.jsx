import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import './Head.css'


function Head () {
    return (
        <div className="Header">
    <NavLink to="main" className="nav" >Main</NavLink>
    <NavLink to="/" className="nav" >App</NavLink>
    <select>
        <option value="0">Select Food:</option>
        <option value="1">Pork-Belly</option>
        </select>
    </div>
    );
}

export default Head ;