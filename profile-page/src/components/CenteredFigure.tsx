import React from 'react'
import './CenteredFigure.css'

interface Props {
    image: string,
    width: number
}


const CenteredFigure = ({ image, width }: Props) => {
    return (
        <div className="CenteredFigure" >
            <span className="CenterHelper"></span>
            <img className="CenteredImage" style={{ "width": width }} src={image} alt="Figure" />
        </div>
    )
}

export default CenteredFigure