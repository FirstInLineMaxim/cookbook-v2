import React from 'react'
import search from './logo/search.svg'
import './search.css'


export default function Search({food}) {
  const searchResult = document.querySelector('.searchResult')
  function filterSearch(e){
    const input = e.target.value
   const result = food.filter(foodItem => foodItem.title.includes(input))
   const titleRes = result.map(item => Object.values(item)[0])
   const display = titleRes.map((ele) => ele)
   if(!input){
    searchResult.style.display = 'none'
   }
   if(input && result){
    searchResult.style.display = 'block'

    searchResult.innerHTML = display
   }
   console.log(display)
    
    }
  return (
    <div className="search-box">
  <input onChange={filterSearch} type="text" className="search-input" placeholder="Start Looking For Something!"/>
  <a className="search-btn" href="#">
    <i className="fas fa-search"><img className='search_icon_head' src={search} alt="search" /></i>
  </a>
  <div className='searchResult'></div>
</div>
  )
}
