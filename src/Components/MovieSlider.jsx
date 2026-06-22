import React from 'react'
import { PiLessThan, PiGreaterThan } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const MovieSlider = () => {
    return (
        <section className='text-white py-12 lg:px-25' id=''>
            <div className="container mx-auto">
                <div className="flex items-baseline justify-between mb-8">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                        <h2>Title</h2>
                        {/* conditional rendering */}
                        <p className='text-neutral-400 text-sm mt-1'>subtitle</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className='text-white font-bold text-xl bg-neutral-800/70 hover:bg-neutral-700 rounded-full p-2 cursor-pointer' aria-label='Scroll Left'>
                            <PiLessThan />
                        </button>
                        <button className='text-white font-bold text-xl bg-neutral-800/70 hover:bg-neutral-700 rounded-full p-2 cursor-pointer' aria-label='Scroll Right'>
                            <PiGreaterThan />
                        </button>
                    </div>
                </div>
                {/* Movie slider section */}
                <div className="relative ">
                    <div className="flex space-x-4 overflow-hidden scrollbar-hide pb-4 snap-x">
                        {/* Conditional Rendering */}
                        <div className="min-w-50 md:min-w-60 snap-start relative cursor pointer group cursor-pointer">
                            <div className="rounded-lg overflow-hidden bg-neutral-800">
                                <div className="relative aspect-2/3">
                                    <img src="/" className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-white text-sm font-medium truncate">
                                    Movie name
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-1">
                                        <FaStar style={{color: 'gold', fontSize:'1rem'}}/>
                                        <span className='text-neutral-400 text-xs'>8.1</span>
                                    </div>
                                    <span className='text-neutral-400 text-xs'>1918</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieSlider
