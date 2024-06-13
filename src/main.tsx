import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Firebase } from './utils/firebase'
import Routing from './routes.tsx'

new Firebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
