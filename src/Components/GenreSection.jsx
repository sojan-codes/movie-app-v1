import React from 'react'
import { FaStar } from "react-icons/fa";

const GenreSection = () => {
    return (
        <section className='py-12 bg-neutral-900/50 lg:px-25'>

            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Browse by Genre
                </h1>
                {/* genre tabs */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                        {/* conditional rendering */}
                        <button className="px-4 py-2 rounded-md transition-colors text-sm text-white cursor-pointer bg-neutral-700">Name</button>
                    </div>
                </div>
                {/* conditional rendering */}
                <div className="h-64 flex justify-center items-center">
                    <div className="animate-pulse">
                        <div className="h-12 w-12 border-4 border-red-500 border-t-transparent animate-spin rounded-full">
                        </div>
                    </div>
                </div>
                {/* else */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* map method */}
                    <div className="group cursor-pointer">
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
                                    <FaStar style={{ color: 'gold', fontSize: '1rem' }} />
                                    <span className='text-neutral-400 text-xs'>8.1</span>
                                </div>
                                <span className='text-neutral-400 text-xs'>1918</span>
                            </div>
                            <button className="w-full py-2 rounded-xl mt-4 cursor-pointer text-sm hover:bg-red-900 bg-red-800 text-white">View Details</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default GenreSection
