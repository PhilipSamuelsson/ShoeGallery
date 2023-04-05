import React from 'react'
import AboutHero from '../Components/AboutHero/AboutHero'
import HeadingText from '../Components/HeadingText/HeadingText'
import NavBarTest from '../Components/Navbar/NavBarTest'
import AboutGrid from '../Components/AboutGrid/AboutGrid'
import '../main.css'
import FooBar from '../Components/FooBar/FooBar.tsx'

function AboutPage() {
    return (
        <div>
            <NavBarTest />
            <AboutHero />
            <HeadingText title="About Valorant" />
            <AboutGrid />
            <FooBar />
        </div>
    )
}

export default AboutPage
