import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Turnus1 from './components/sections/Turnus1'
import Turnus2 from './components/sections/Turnus2'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/turnus1" element={<Turnus1 />} />
        <Route path="/turnus2" element={<Turnus2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
