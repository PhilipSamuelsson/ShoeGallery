import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import GalleryGrid from './Components/GalleryGrid'
import NavBarTest from './Components/Navbar/NavBarTest'
import HeroSection from './Components/HeroSection'
import './main.css'

function App() {
    return (
        <div className="App">
            <NavBarTest />
            <HeroSection></HeroSection>
            <GalleryGrid />
        </div>
    )
}

export default App
