import React from 'react'
import profileImage from '../assets/ola-alstad.jpg'
import './ProfileImage.css'

const ProfileImage: React.FC = () => {
    return (
        <div>
            <img className="profileImage" src={profileImage} alt="Profile" />
        </div>
    )
}

export default ProfileImage