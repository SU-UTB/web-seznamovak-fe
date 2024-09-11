import Navbar from './components/moleculs/Navbar'
import Aftermovie from './components/sections/Aftermovie'
import Photos from './components/sections/Photos'
import Instructors from './components/sections/Instructors'
import Application from './components/sections/Application'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Map from './components/sections/Map'
// import Partners from './components/sections/Partners'
import Overlay from './components/sections/Overlay'
import ScrollToTopButton from './components/moleculs/ScrollToTopButton'
import { AnalyticsEvents, Firebase } from './utils/firebase'

const App: React.FC = () => {
  Firebase.instance.aLog(AnalyticsEvents.webLoaded, {})

  return (
    <div className="App">
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
      <Navbar />
      <Overlay />
      <Application />
      <Photos />
      <Aftermovie />
      <Map />
      <Instructors />
      <Faq />
      {/* <Partners /> */}
      <Contact />
      <ScrollToTopButton />
    </div>
  )
}

export default App
