import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import HeadingText from '../Components/HeadingText/HeadingText'
import ContactHero from '../Components/ContactHero/ContactHero'
import ContactForm from '../Components/ContactForm/ContactForm'
import { useState } from 'react'
import FooBar from '../Components/FooBar/FooBar.tsx'

export const darkMode = React.createContext()

function ContactPage() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleDark() {
        setIsDarkMode((prevDarkTheme) => !prevDarkTheme)
    }

    return (
        <div>
            <NavBarTest />
            <ContactHero />
            <HeadingText title="Contact us" />
            <darkMode.Provider value={isDarkMode}>
                <button className="darkToggler" onClick={toggleDark}>
                    Toggle Darkmode
                </button>
                <ContactForm />
            </darkMode.Provider>
            <FooBar />
        </div>
    )
}

export default ContactPage
