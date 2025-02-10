import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <header>
        <div className="header__logo-container">
            <img src={logo} alt="Love you" className="header__logo"/>
        </div>
        <span className="header__slogan">♡ Happy Valentines Day, Rita ♡</span>
    </header>
  )
}

export default Header