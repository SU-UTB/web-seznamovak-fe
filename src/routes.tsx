import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App'
import Turnus from './components/sections/Turnus'

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/turnus1"
          element={
            <Turnus
              turnusNumber={1}
              label="1. Turnus"
              date="19.8. - 22.8. 2024"
            />
          }
        />
        <Route
          path="/turnus2"
          element={
            <Turnus
              turnusNumber={2}
              label="2. Turnus"
              date="26.8. - 29.8. 2024"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
