import React from 'react';
import {NavLink,useNavigate} from "react-router-dom";
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

        const soul = () => {
            return (
            <div> {foodlist.map((food) => (<p>{food.title}</p>))}
            </div>)

        }
   
        
    return (
        <div id="back">
        <div className="Header">
    <NavLink to="main" className="nav" >Main</NavLink>
    <NavLink to="/" className="nav" >Contact</NavLink>
    <a href="https://www.tasteatlas.com/100-most-popular-foods-in-the-world" className="nav">International Food delicacies</a> 
        {!foodlist ? (<p>Loading</p>) : (
    <select onChange={e => navigate(`main/${e.target.value}`)}>
         <option value="0">Select Food:</option>
     {foodlist.map((food)=> (<option key={food.title} value={food.mainImage.title} >{food.title}</option>))}
          </select>
    )}
     </div>
        <div id="div2"><p onClick={ e =>  console.log(foodlist)}>M.F.M.</p><p>Food for the Soul</p><p>Food for the Body</p></div>
    </div>
    );
}

export default Head ;