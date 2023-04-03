import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import './ContactHero.css'

export default function HeroSection() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className="ContactHeroImage" maxWidth="">
                <Box sx={{ height: '80vh' }} />
            </Container>
        </React.Fragment>
    )
}
