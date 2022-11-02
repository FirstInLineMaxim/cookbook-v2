import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
        <nav className='nav-container'>
            <a href='#' >About</a>
            <a href='#' >Contact</a>
            <a href='#' >TheDev's</a>
            <a href='#' >History</a>
            <a href='#' >AGB</a>
            <a href='#' >Policy</a>
        </nav>
        <div className='contacts-container'>
            <div className='socials'>
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-placeholder-agriculture-and-farmer-kiranshastry-gradient-kiranshastry.png" alt="Instagram" />
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-placeholder-agriculture-and-farmer-kiranshastry-gradient-kiranshastry.png" alt="Github" />
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-placeholder-agriculture-and-farmer-kiranshastry-gradient-kiranshastry.png" alt="Facebook" />
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-placeholder-agriculture-and-farmer-kiranshastry-gradient-kiranshastry.png" alt="LinkedIn" />
            </div>
            <input type={'text'}/>
        </div>
</div>
</>
  )
}
