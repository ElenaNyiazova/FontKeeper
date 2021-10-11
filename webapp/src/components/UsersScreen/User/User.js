import React from 'react'
import Toggle from '../../../common/Toggle/Toggle'
import './User.scss'

const User = (props) => {
    const {name, email, suggested, approved, active} = props.user
    return <li className="adminTable-item">
        <p className="userName table-cell wide">{name}</p>
        <p className="email table-cell wide">{email}</p>
        <p className="suggested table-cell wide">{suggested}</p>
        <p className="approved table-cell wide">{approved}</p>
        <div className="active table-cell"><Toggle checked={active} /></div>
    </li>
}
export default User
