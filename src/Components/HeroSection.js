import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className="HeroImage" maxWidth="">
                <Box sx={{ height: '60vh' }} />
            </Container>
        </React.Fragment>
    )
}
