import React from 'react'
import './AbstractFigure.css'

interface Props {
    image: string
}

const AbstractFigure = ({ image }: Props) => {
    console.log("AbstractFigure image: " + image)
    return (
        <div className="AbstractFigure">
            <img className="AbstractImage" src={image} alt="Abstract Image ph" />
        </div>
    )
}

export default AbstractFigure