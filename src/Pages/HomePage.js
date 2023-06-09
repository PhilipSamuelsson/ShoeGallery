import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import GalleryGrid from '../Components/Gallerygrid/GalleryGrid'
import HeroSection from '../Components/HeroSection/HeroSection'
import '../main.css'
import HeadingText from '../Components/HeadingText/HeadingText'
import FooBar from '../Components/FooBar/FooBar.tsx'
function HomePage() {
    return (
        <div>
            <NavBarTest />
            <HeroSection />
            <HeadingText title="Valorant Agents" />
            <GalleryGrid />
            <FooBar />
        </div>
    )
}

export default HomePage
