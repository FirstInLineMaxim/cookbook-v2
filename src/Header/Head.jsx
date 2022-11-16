import React from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import './Head.css'
import getContentful from "../getContentful";
import {useState, useEffect} from "react";
import logo from './logo/logo1.webp'
import search from './logo/search.svg'
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
            <div className='left_head'>
            <img className="logo_head"src={logo} alt=''/>
            <nav className='nav_head'>
            {!foodlist ? (<p>Loading</p>) : (
    <select className='select_head' onChange={e => navigate(`main/${e.target.value}`)}>
         <option className="option_head" value="0">The Recepies</option>
     {foodlist.map((food)=> (<option className="option_head" key={food.title} value={food.mainImage.title} >{food.title}</option>))}
          </select>
    )}
  
    <NavLink to="thedevs" className="nav" >TheDevs's</NavLink>
    <NavLink to="/" className="nav" >Contact</NavLink>
    <a href="https://www.tasteatlas.com/100-most-popular-foods-in-the-world" className="nav">International Food delicacies</a> 

    </nav>
    </div>
    <div className='right_head'>
    <div class="search-box">
  <input type="text" class="search-input" placeholder="Start Looking For Something!"/>
  <a class="search-btn" href="#">
    <i class="fas fa-search"><img className='search_icon_head' src={search} alt="search" /></i>
  </a>
</div>
    </div>
     </div>
    </div>
    );
}

export default Head ;