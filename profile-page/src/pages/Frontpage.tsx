import React from 'react'
import TopLayout from '../layout/TopLayout'
import ProfileImage from '../components/ProfileImage'
import ProfileText from '../components/ProfileText'
import FrontpageMdx from '../mdx/frontpage.mdx'

const Frontpage = () => {
    return (
        <>
            <TopLayout>
                <ProfileImage />
                <ProfileText />
            </TopLayout>
            <FrontpageMdx />
        </>
    )
}

export default Frontpage