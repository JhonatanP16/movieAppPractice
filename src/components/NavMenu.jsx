import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavMenu.module.css'
const NavMenu = () => {
    const classActive = ({isActive}) => isActive ? classes.active : ''; 
  return (
    <nav className={classes.nav}>
        <NavLink to="/" className={classActive}>Home</NavLink>
        <NavLink to="/movies" className={classActive}>Todos Films</NavLink>
        <hr />
       <a href="#">Registro</a>
       <NavLink to="/login" className={classActive}>Entrar</NavLink>
       <NavLink to="/account">Su cuenta</NavLink>
       <button className={classes.sair}>
        Salir
       </button>
    </nav>
  )
}

export default NavMenu
