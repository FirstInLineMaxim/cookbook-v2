import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import discord from '../img/Icons/iconmonstr-discord-3.svg'
import github from '../img/Icons/iconmonstr-github-3.svg'
import facebook from '../img/Icons/iconmonstr-facebook-3.svg'
import linkedin from '../img/Icons/iconmonstr-linkedin-3.svg'


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
          <div className="newsletter">
          <input type={'text'} placeholder={"enter your email"}/>
            <button>Join</button>
          </div>

            <div className='socials'>
                <img src={discord} alt="Discord" />
                <img src={github} alt="Github" />
                <img src={facebook} alt="Facebook" />
                <img src={linkedin} alt="LinkedIn" />
            </div>
        </div>
</div>
</>
  )
}
