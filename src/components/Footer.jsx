import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import discord from './image/discord.svg'
import facebook from './image/facebook.svg'
import linkedIn from './image/linkedin.svg'
import github from './image/github.svg'


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
                <img src={discord} alt="Instagram" />
                <img src={facebook} alt="Github" />
                <img src={linkedIn} alt="Facebook" />
                <img src={github} alt="LinkedIn" />
            </div>
            <input type={'text'} placeholder={"E-mail"}/>
        </div>
</div>
</>
  )
}
