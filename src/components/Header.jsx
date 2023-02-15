import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import NavMenu from './NavMenu'
const Header = () => {
  return (
    <header className={`${classes.header} container-style`}>
        <Link to="/" className={classes.logo}>TvSearch</Link>
        <NavMenu/>
        <div className={classes.api}>
            Datos de Api 
            <a href=""> TMDB</a>
        </div>
        <div className={classes.by}>
            dev choi <a href=""> Jhonatan</a>
        </div>
    </header>
  )
}

export default Header
