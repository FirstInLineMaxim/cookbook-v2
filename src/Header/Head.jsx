import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,NavLink,useNavigate,generatePath,Link, Routes, Route } from "react-router-dom";
import './Head.css'
import getContentful from "../getContentful";
import {useState, useEffect} from "react";



function Head () {
    const [foodlist, setfoodlist] = useState();
    const { getFoods } = getContentful();
   const navigate = useNavigate();

    useEffect(()=> 
    {getFoods()
        .then((res) => setfoodlist(res))
        }
        ,[])
   
        
    return (
        <div className="Header">
    <NavLink to="main" className="nav" >Main</NavLink>
    <NavLink to="/" className="nav" >App</NavLink>
        {!foodlist ? (<p>Loading</p>) : (
    <select onChange={e => navigate(`main/${e.target.value}`)}>
         <option value="0">Select Food:</option>
     {foodlist.map((food)=> (<option key="{value}" value={food.mainImage.title} >{food.title}</option>))}
        
        </select>
    )}
    </div>
    );
}

export default Head ;