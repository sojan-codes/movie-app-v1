import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdError } from "react-icons/md";
import { FaStar, FaPlayCircle, FaPlus } from "react-icons/fa";

const MovieDetails = () => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/90 backdrop-blur-sm overflow-auto h-screen'>
            <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl min-h-[85vh] md:min-h-[65vh] lg:min-h-[60vh] overflow-auto scrollbar-none">
                {/* close button */}
                <button className="absolute top-4 right-4 z-50 p-2 rounded-full  bg-neutral-700/80 hover:bg-neutral-600/80 transition-all cursor-pointer">
                    <IoMdClose style={{ color: 'white', }} />
                </button>
                {/* conditional rendering */}
                <div className="flex justify-center items-center h-96">
                    <div className="hidden animate-pule">
                        <div className="w-16 h-16 border border-red-500 border-t-transparent rounded-full animate-spin">
                        </div>
                    </div>
                    {/* if */}
                    <div className="flex flex-col items-center justify-center h-96 "> {/* hidden ko thau ma flex xa */}
                        <div className="text-center text-neutral-500 text-8xl">
                            <MdError />
                        </div>
                        <h1 className='text-xl font-bold mt-4 text-neutral-500'>Failed to load Movie Details</h1>
                        <p className='mt-2 text-neutral-400 font-semibold text-sm'>Error</p>
                        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-1 text-sm rounded-md cursor-pointer"> close</button>
                    </div>
                    {/* else */}
                    <div className=''>
                        <div className="p-5 md:p-8">
                            <div className="md:flex gap-8 mt-70 md:mt-20 relative ">
                                {/* poster */}
                                <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                                    <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                                        {/* conditional rendering */}
                                        <img src="" alt="" className="w-full h-auto " />
                                        {/* else */}
                                        <div className="w-full aspect-2/3 bg-neutral-700 flex items-center justify-center">No poster Available.</div>
                                    </div>
                                </div>
                                <div className="">
                                    {/* Movie Info */}
                                    <div className="flex-1">
                                        <h1 className="text-3xl md:text-4xl font-bold text-white">Movie Title</h1>
                                    </div>
                                    {/* rating with other stuffs */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                                        {/* conditional rendering */}
                                        <div className="flex items-center w-full md:mr-5 space-x-8">
                                            <div className="flex items-center space-x-1">
                                                <FaStar style={{ color: 'gold', fontSize: '1rem' }} />
                                                <span className='text-neutral-400 text-normal'>8.1</span>
                                            </div>
                                            <span className='text-neutral-400 text-normal'>Time</span>
                                            <span className='text-neutral-400 text-normal'>1918</span>
                                        </div>
                                        <div className="w-full space-y-4">
                                            <h1 className="text-2xl md:text-3xl font-semibold text-white">Overview</h1>
                                            <p className="font-sm text-neutral-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa similique eos optio itaque tempora error, non inventore, rerum sed cum et eligendi adipisci? Quas, culpa doloremque? Sapiente aut a similique iste minima? Rerum, sit dolores ipsum neque architecto alias ducimus.</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetails
