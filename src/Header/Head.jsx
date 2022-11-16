import React from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import './Head.css'
import getContentful from "../getContentful";
import {useState, useEffect} from "react";
import logo from './logo/logo1.webp'
import './logo/logo.css'



function Head () {
    const [foodlist, setfoodlist] = useState();
    const { getFoods } = getContentful();
   const navigate = useNavigate();

    useEffect(()=> 
    {getFoods()
        .then((res) => setfoodlist(res))
        }
        ,[getFoods])

        const soul = () => {
            return (
            <div> {foodlist.map((food) => (<p>{food.title}</p>))}
            </div>)

        }
   
        
    return (
        <div id="back">
        <div className="Header">
            <img className="logo_head"src={logo} alt=''/>
            <nav className='nav_head'>
    <NavLink to="thedevs" className="nav" >TheDevs's</NavLink>
    <NavLink to="/" className="nav" >Contact</NavLink>
    <a href="https://www.tasteatlas.com/100-most-popular-foods-in-the-world" className="nav">International Food delicacies</a> 
        {!foodlist ? (<p>Loading</p>) : (
    <select className='select_head' onChange={e => navigate(`main/${e.target.value}`)}>
         <option className="option_head" value="0">The Recepies</option>
     {foodlist.map((food)=> (<option className="option_head" key={food.title} value={food.mainImage.title} >{food.title}</option>))}
          </select>
    )}
    </nav>
     </div>
    </div>
    );
}

export default Head ;