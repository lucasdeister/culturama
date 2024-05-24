import React from 'react'

import style from "../Header/Header.module.css"

import logo from "../Header/img/logo.png"

const Header = () => {
  return (
    <header className={style.cabecalho}>
        <img src={logo} alt="logo" />
    </header>
  )
}

export default Header