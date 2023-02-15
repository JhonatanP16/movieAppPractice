import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavMenu.module.css'
const NavMenu = () => {
  return (
    <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Todos Films</NavLink>
        <hr />
       <a href="#">Cadastre</a>
       <NavLink to="/login">Entrar</NavLink>
       <NavLink to="/account">Sua conta</NavLink>
       <button className={classes.sair}>
        Salir
       </button>
    </nav>
  )
}

export default NavMenu
