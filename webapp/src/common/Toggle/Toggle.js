import React, {useState} from 'react'
import classes from './Toggle.module.scss'

const Toggle = ({checked}) => {
    const [active, setActive] = useState(checked)

    const handleChange = () => {
        setActive(!active)
    }

    return <div>
        <label className={classes.label}>
            <input className={classes.input} onChange={handleChange} checked={active} type="checkbox"/>

            <div className={classes.box}>
                <div className={classes.checkMark}></div>
            </div>
        </label>
    </div>
}

export default Toggle
