import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import FrontendDev from '../../assets/frontend-dev.gif'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mabin Varghese </h1>
        <h5 className="text-light">Frontend  Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={FrontendDev} alt='' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header