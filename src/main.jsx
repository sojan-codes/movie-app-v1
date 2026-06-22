import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoviesContext from './Context/MoviesContext.jsx'

createRoot(document.getElementById('root')).render(
  <MoviesContext>
    <App />
  </MoviesContext>

)
