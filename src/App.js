import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import NavBarTest from './Components/Navbar/NavBarTest'
import './main.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'

import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import AgentDetails from './Pages/AgentDetails'

createBrowserRouter([{ path: '/' }, {}])

function App() {
    return (
        <div className="App">
            <NavBarTest />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/agent/:agentUuid" element={<AgentDetails />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default App
