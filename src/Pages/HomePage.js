import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import GalleryGrid from '../Components/Gallerygrid/GalleryGrid'
import HeroSection from '../Components/HeroSection/HeroSection'
import '../main.css'

function HomePage() {
    return (
        <div>
            <NavBarTest />
            <HeroSection />
            <GalleryGrid />
        </div>
    )
}

export default HomePage
