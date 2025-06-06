import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App'
import Turnus from './components/sections/Turnus'
import {turnus1, turnus2} from '../src/data/constants'

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
              date={turnus1.displayDate}
            />
          }
        />
        <Route
          path="/turnus2"
          element={
            <Turnus
              turnusNumber={2}
              label="2. Turnus"
              date={turnus2.displayDate}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
