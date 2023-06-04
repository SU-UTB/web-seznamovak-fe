import Navbar from './components/moleculs/Navbar'
import Aftermovie from './components/sections/Aftermovie'
import Instructors from './components/sections/Instructors'
import Application from './components/sections/Application'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Map from './components/sections/Map'
import Partners from './components/sections/Partners'
import Overlay from './components/sections/Overlay'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Overlay />
      <Application />
      <Aftermovie />
      <Map />
      <Instructors />
      <Faq />
      <Partners />
      <Contact />
    </div>
  )
}

export default App
