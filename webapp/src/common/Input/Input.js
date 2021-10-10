import React from 'react'
import classes from './Input.module.scss'

const Input = ({name, label, placeholder, className}) => 
    <div className={classes.inputBlock + ` ${className}`}>
        <input className={classes.input + ' regular'} name={name} id={name} type="text" placeholder={placeholder} />
        <label className={classes.label + ' regular'} for={name}>{label}</label>
    </div>

export default Input
