import React from 'react'
import classes from './Toggle.module.scss'

const Toggle = () => 
    <div>
        <label className={classes.label}>
            <input className={classes.input} type="checkbox"/>
            <div className={classes.box}>
                <div className={classes.checkMark}></div>
            </div>
        </label>
    </div>

export default Toggle
