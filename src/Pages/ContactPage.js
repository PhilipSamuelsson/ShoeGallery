import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import HeadingText from '../Components/HeadingText/HeadingText'
import ContactHero from '../Components/ContactHero/ContactHero'
import ContactForm from '../Components/ContactForm/ContactForm'



function ContactPage() {
    return (
        <div>
            <NavBarTest />
            <ContactHero />
            <HeadingText title="Contact us" />
            <ContactForm />
        </div>
    )
}

export default ContactPage
