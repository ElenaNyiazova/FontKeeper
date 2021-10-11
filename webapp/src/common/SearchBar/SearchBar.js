import React from 'react'
import classes from './SearchBar.module.scss'

const SearchBar = ({placeholder}) => {
    return (
        <div className={classes.searchBar + ' regular searchBar'}>
            <input className={classes.input} type="text" placeholder={placeholder} />
            <div className={classes.searchIcon}></div>
        </div>
    )
}

export default SearchBar
