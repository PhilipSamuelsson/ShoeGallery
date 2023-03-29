import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import './AboutHero.css'

export default function HeroSection() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className="AboutHeroImage" maxWidth="">
                <h2 className="AboutHeroText"> About us</h2>
                <Box sx={{ height: '60vh' }} />
            </Container>
        </React.Fragment>
    )
}
