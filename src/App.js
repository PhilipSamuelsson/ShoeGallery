import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import GalleryGrid from './Components/GalleryGrid'
import NavBar from './Components/Navbar/NavBar'
import HeroSection from './Components/HeroSection'

function App() {
    return (
        <div className="App">
            <NavBar />
            <HeroSection>Hejhej</HeroSection>
            <GalleryGrid />
        </div>
    )
}

export default App
