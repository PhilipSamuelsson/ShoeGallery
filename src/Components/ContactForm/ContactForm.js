import * as React from 'react'
import './ContactForm.css'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { darkMode } from '../../Pages/ContactPage'

export default function StateTextFields() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [msg, setMsg] = React.useState('')
    const [toggle, setToggle] = React.useState(true)

    const darkTheme = useContext(darkMode)
    const darkStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }

    const confirmText = (
        <div className="block">
            <h3>
                Thank you for your message, {firstName} {lastName}.
            </h3>
            <p> We will reply to {Email} in the next 24 hours!</p>
        </div>
    )

    const form = (
        <div style={darkStyles} className="block">
            <input
                className="input-res"
                placeholder="Firstname"
                type="text"
                value={firstName}
                onChange={(event) => {
                    setFirstName(event.target.value)
                }}
            />
            <input
                className="input-res"
                placeholder="Lastname"
                type="text"
                value={lastName}
                onChange={(event) => {
                    setLastName(event.target.value)
                }}
            />
            <input
                className="input-res"
                placeholder="Email"
                type="email"
                value={Email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <textarea
                className="input-res"
                placeholder="Message"
                value={msg}
                onChange={(event) => {
                    setMsg(event.target.value)
                }}
            />
            <Button
                onClick={() => setToggle()}
                size="large"
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
        </div>
    )

    return <div> {toggle ? form : confirmText} </div>
}
