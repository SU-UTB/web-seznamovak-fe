import Navbar from './components/moleculs/Navbar'
import Aftermovie from './components/sections/Aftermovie'
import Instructors from './components/sections/Instructors'
import Application from './components/sections/Application'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Map from './components/sections/Map'
import Partners from './components/sections/Partners'
import Overlay from './components/sections/Overlay'
import { AnalyticsEvents, Firebase } from './utils/firebase'
import Modal from './components/sections/Modal'
import React, { useState, useEffect } from 'react'

const App = () => {
  Firebase.instance.aLog(AnalyticsEvents.webLoaded)

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit')
    const now = new Date().getTime()
    const oneWeek = 7 * 24 * 60 * 60 * 1000

    if (!lastVisit || now - lastVisit > oneWeek) {
      setIsModalOpen(true)
      localStorage.setItem('lastVisit', now)
    }
  }, [])

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="App">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Navbar />
      <Overlay />
      <Application />
      <Aftermovie />
      <Map />
      {/* <Instructors /> */}
      <Faq />
      <Partners />
      <Contact />
    </div>
  )
}

export default App
