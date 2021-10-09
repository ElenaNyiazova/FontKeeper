import React from 'react'
import AccountInfo from './AccountInfo/AccountInfo'
import FontExample from './FontExample/FontExample'
import MyFonts from './MyFonts/MyFonts'

import './Profile.scss'

const Profile = () => {
    return (
        <div className="Profile">
            <div className="container">
                <AccountInfo/>
                
                <div className="mainContent">
                    <MyFonts />
                    <FontExample />
                </div>
            </div>
        </div>
    )
}

export default Profile
