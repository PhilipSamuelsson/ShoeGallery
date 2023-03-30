import React from 'react'
import AboutHero from '../Components/AboutHero/AboutHero'
import HeadingText from '../Components/HeadingText/HeadingText'
import NavBarTest from '../Components/Navbar/NavBarTest'
import AboutGrid from '../Components/AboutGrid/AboutGrid'
import '../main.css'

function AboutPage() {
    return (
        <div>
            <NavBarTest />
            <AboutHero />
            <HeadingText title="About Valorant" />
            <AboutGrid />
        </div>
    )
}

export default AboutPage
