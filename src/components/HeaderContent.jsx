import React from 'react'
import { Link } from 'react-router-dom'
import classes from './HeaderContent.module.css'
import SearchField from './utilities/SearchField'
const HeaderContent = () => {
  return (
    <div className={`container ${classes.header_entrada}`}>
      <SearchField/>
      <Link to='/login' className={classes.entrar}>Entrar</Link>
      <a href="" className='btn-padrao'>Registrarse</a>
    </div>
  )
}

export default HeaderContent
