import React from 'react'
import { FaStar, FaPlayCircle, FaPlus } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const HeroSection = () => {
    return (
        <div className="w-full h-screen relative">
            {/* backdrop */}
            <div className="absolute inset-0 bg-neutral-900 transition-all duration-700 bg-cover bg-center">
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-900 to-transparent" />
            </div>
            {/* Content  */}
            <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4 lg:px-25">
                <div className="max-w-3xl">
                    {/* movie info */}
                    <div className={`transition-all duration-700`}>
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                                Featured
                            </span>
                            {/* conditional rendering movie review */}
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">
                                    <FaStar />
                                </span>
                                <span className="text-yellow-400">Movie Review</span>
                            </div>
                            <span className="text-neutral-400 text-xl"><LuDot /></span>
                            <span className="text-neutral-300 text-sm">Movie Release Date</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Movie Title
                    </h1>
                    <p className=" text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quibusdam! Delectus maxime nemo nihil doloribus.</p>
                    <div className="flex flex-wrap gap-3">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg cursor-pointer flex items-center gap-2">
                            <span>
                                <FaPlayCircle />
                            </span>
                            <span>Watch Now</span>
                        </button>
                        <button className="border border-neutral-600 px-6 py-3 rounded-lg cursor-pointer flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700/80 text-white">
                            <span><FaPlus /></span>
                            <span>Add to Watchlist</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* pagination */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
                {/* conditional rendering */}
                <button className={`h-1.5 rounded-full transition-all bg-red-600`}>btn</button>
            </div>
        </div>
    )
}

export default HeroSection
