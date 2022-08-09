import React from 'react'
import './TopLayout.css'

const TopLayout = ({ children }: any) => {
    return (
        <div className="TopLayout">
            {children}
        </div>
    )
}

export default TopLayout