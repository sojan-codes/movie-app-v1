import React, { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import Moviecontent from './Components/MovieContent.jsx'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Moviecontent />
      </main>
    </div>
  )
}

export default App
