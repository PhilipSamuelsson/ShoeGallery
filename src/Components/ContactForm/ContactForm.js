import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './ContactForm.css'
import Button from '@mui/material/Button'

export default function StateTextFields() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [msg, setMsg] = React.useState('')

    return (
        <div className="formWrapper">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vh' }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-controlled"
                    label="First Name"
                    value={firstName}
                    onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Last Name"
                    value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value)
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Email"
                    value={Email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <TextField
                    multiline="true"
                    id="outlined-controlled"
                    label="Message"
                    value={msg}
                    onChange={(event) => {
                        setMsg(event.target.value)
                    }}
                />
                <Button
                    size="small"
                    className="SubmitButton"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </Box>
        </div>
    )
}
