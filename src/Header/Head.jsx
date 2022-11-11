import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink,generatePath,Link, Routes, Route } from "react-router-dom";
import './Head.css'
import getContentful from "../getContentful";
import {useState, useEffect} from "react";



function Head () {
    const [foodlist, setfoodlist] = useState();
    const { getFoods } = getContentful();
   

    useEffect(()=> 
    {getFoods()
        .then((res) => setfoodlist(res))
        }
        ,[])
   
        
    return (
        <div className="Header">
    <NavLink to="main" className="nav" >TheDevs</NavLink>

    <NavLink to="/" className="nav" >TheCookBook</NavLink>
        {!foodlist ? (<p>Loading</p>) : (
    <select onClick={e => console.log(e.target.value)}>
         <option value="0">Select Food:</option>
     {foodlist.map((food)=> (<option key={food.mainImage.title} value={food.mainImage.title} >{food.title}</option>))}
        
        </select>
    )}
    </div>
    );
}

export default Head ;