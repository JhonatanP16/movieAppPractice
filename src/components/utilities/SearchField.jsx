import React from 'react'
import classes from './SearchField.module.css'
const SearchField = () => {
  return (
    <div className={classes.container_search}>
      <form className={classes.form}>
        <div className={classes.input_search}>
            <input 
            type="search"
            id='search'
            name='search'
            autoComplete='off'
            className={`input-style ${classes.search}`}
            placeholder='E.x : Avatar'
            />
        </div>
      </form>
    </div>
  )
}

export default SearchField
