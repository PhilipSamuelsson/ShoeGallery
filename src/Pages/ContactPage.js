import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import HeadingText from '../Components/HeadingText/HeadingText'
import AboutHero from '../Components/AboutHero/AboutHero'
function ContactPage() {
    return (
        <div>
            <NavBarTest />
            <AboutHero />
            <HeadingText title="Contact us" />
        </div>
    )
}

export default ContactPage
