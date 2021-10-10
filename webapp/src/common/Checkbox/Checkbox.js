import React from 'react'
import classes from './Checkbox.module.scss'

const Checkbox = ({children}) => 
    <div>
        <label className={classes.label}>
            <input className={classes.input} type="checkbox"/>
            <div className={classes.checkMark}></div>
            <p className={classes.box}>{children}</p>
        </label>
    </div>

export default Checkbox
