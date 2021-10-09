import React from 'react'
import classes from './Switch.module.scss'

const Switch = () => 
    <div>
        <label className={classes.label}>
            <input className={classes.input} type="checkbox"/>
            <div className={classes.box}>
                <div className={classes.checkMark}></div>
            </div>
        </label>
    </div>

export default Switch
