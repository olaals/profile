import React from 'react'
import './JournalLink.css'

interface JournalLinkProps {
    journal: string,
    link: string
}

const JournalLink = ({ journal, link }: JournalLinkProps) => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="JournalLink" onClick={() => openInNewTab(link)}>
            <div className="JournalName">
                {journal}
            </div>
            <div className="JournalLinkText">
                [Paper link]
            </div>
        </div>
    )
}

export default JournalLink