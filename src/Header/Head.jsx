import React from 'react';
import {NavLink,Link,useNavigate} from "react-router-dom";
import './Head.css'
import getContentful from "../getContentful";
import {useState, useEffect} from "react";
import logo from './logo/logo1.webp'
import Search from '../components/Search';
import './logo/logo.css'



function Head () {
    const [foodlist, setfoodlist] = useState();
    const { getFoods } = getContentful();
   const navigate = useNavigate();

    useEffect(()=> 
    {fetch('http://localhost:3000/recepies')
    .then(data => data.json())
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
            <div className='left_head'>
                <Link to="/cookbook-v2"><img className="logo_head"src={logo} alt=''/></Link>
            
            <nav className='nav_head'>
            {!foodlist ? (<p>Loading</p>) : (
    <select className='select_head' onChange={e => navigate(`cookbook-v2/${e.target.value}`)}>
         <option className="option_head" value="0">The Recepies</option>
     {foodlist.map((food)=> (<option className="option_head" key={food.title} value={food.title} >{food.title}</option>))}
          </select>
    )}
  
    <NavLink to="thedevs" className="nav" >TheDevs's</NavLink>
    <NavLink to="cookbook-v2/upload" className="nav" >Upload</NavLink>
    <a href="https://www.tasteatlas.com/100-most-popular-foods-in-the-world" className="nav">International Food delicacies</a> 

    </nav>
    </div>
    <div className='right_head'>
    <Search food={foodlist}/>
    </div>
     </div>
    </div>
    );
}

export default Head ;