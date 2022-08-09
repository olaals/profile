import React from 'react'
import './MainLayout.css'


const MainLayout = ({ children }: any) => {
    return (
        <div className='MainWin'>
            {children}
        </div>
    )
}

export default MainLayout