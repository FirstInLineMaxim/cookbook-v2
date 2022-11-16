import React from 'react'
import search from './logo/search.svg'
import './search.css'

export default function Search() {
  return (
    <div class="search-box">
  <input type="text" class="search-input" placeholder="Start Looking For Something!"/>
  <a class="search-btn" href="#">
    <i class="fas fa-search"><img className='search_icon_head' src={search} alt="search" /></i>
  </a>
</div>
  )
}
