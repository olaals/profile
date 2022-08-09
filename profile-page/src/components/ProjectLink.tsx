import React from 'react'
import './ProjectLink.css'
import { Link } from 'react-router-dom'

const ProjectLink = ({ project_link }: any) => {
    return (
        <Link to={project_link}>
            <div className="ProjectLink">
                <div className="ProjectName">
                    Read more
                </div>
                <div className="ProjectLinkText">
                    [Link]
                </div>
            </div>
        </Link>
    )
}

export default ProjectLink