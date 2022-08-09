import React from 'react'
import './PublicationCard.css'
import { Link } from 'react-router-dom'
import JournalLink from './JournalLink'
import ProjectLink from './ProjectLink'

interface PublicationCardProps {
    title: string,
    image: string,
    project_link: string,
    journal: string,
    journal_link: string,
    children: JSX.Element
}

const PublicationCard = ({ title, image, project_link, journal, journal_link, children }: PublicationCardProps) => {
    return (
        <div className="PublicationCard">
            <div className="PublicationTextArea">
                <p className="PublicationTitle">{title}</p>
                {children}
                <div className="ProjectJournalLinks">
                    <ProjectLink project_link={project_link} />
                    <JournalLink journal={journal} link={journal_link} />
                </div>

            </div>
            <img className="cardImg" src={image} alt="Profile" />
        </div>
    )
}

export default PublicationCard