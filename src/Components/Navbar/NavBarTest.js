import React, { useEffect } from 'react'
import './NavBarTest.css'
import { Link } from 'react-router-dom'

function NavBarTest() {
    useEffect(() => {
        const navTrigger = document.querySelector('.navTrigger')
        const mainListDiv = document.querySelector('#mainListDiv')

        navTrigger.addEventListener('click', function () {
            this.classList.toggle('active')
            console.log('Clicked menu')
            mainListDiv.classList.toggle('show_list')
            if (mainListDiv.classList.contains('show_list')) {
                mainListDiv.style.display = 'block'
                mainListDiv.style.opacity = '1'
            } else {
                mainListDiv.style.opacity = '0'
                setTimeout(() => {
                    mainListDiv.style.display = 'none'
                }, 300) // Fade out duration is 300ms
            }
        })

        return () => {
            navTrigger.removeEventListener('click', () => {
                this.classList.toggle('active')
                console.log('Clicked menu')
                mainListDiv.classList.toggle('show_list')
                if (mainListDiv.classList.contains('show_list')) {
                    mainListDiv.style.display = 'block'
                    mainListDiv.style.opacity = '1'
                } else {
                    mainListDiv.style.opacity = '0'
                    setTimeout(() => {
                        mainListDiv.style.display = 'none'
                    }, 300) // Fade out duration is 300ms
                }
            })
        }
    }, [])

    return (
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <h2>Valorant Agents</h2>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact </Link>
                        </li>
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    )
}

export default NavBarTest
