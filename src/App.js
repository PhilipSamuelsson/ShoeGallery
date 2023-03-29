import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import NavBarTest from './Components/Navbar/NavBarTest'
import './main.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'

import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

createBrowserRouter([{ path: '/' }, {}])

function App() {
    return (
        <div className="App">
            <NavBarTest />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    )
}

export default App
