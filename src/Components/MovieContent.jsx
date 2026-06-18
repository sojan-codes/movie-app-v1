import React from 'react'
import HeroSection from './HeroSection.jsx'
import MovieSlider from './MovieSlider.jsx'
import GenreSection from './GenreSection.jsx'
import MovieDetails from './MovieDetails.jsx'

const Moviecontent = () => {
  return (
    <div >
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider />
        <GenreSection />
      </div>
      <MovieDetails />
    </div>
  )
}

export default Moviecontent
