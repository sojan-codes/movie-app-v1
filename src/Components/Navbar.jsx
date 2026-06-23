import React, { useEffect, useRef, useState } from 'react'
import { CiSearch, CiMenuFries } from "react-icons/ci"
import { RiCloseLargeFill } from "react-icons/ri";
import { userMoviesContext } from '../Context/MoviesContext';
import { getImgageURL, searchMovies } from '../Services/api';



const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false)

    const searchContainerRef = useRef(null)
    useEffect(() => {
        const handleSearch = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        }
        document.addEventListener('mousedown', handleSearch)
        return () => { document.removeEventListener('mousedown', handleSearch) }
    }, [])

    useEffect(() => {
        searchMovies(searchQuery).then(result => {
            setSearchResult(result)
        }).catch((err) => {
            setSearchResult('Error in fetching Movie', err)
        })
    }, [searchQuery])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [menu, setMenu] = useState(false)
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu])

    return (
        <header className={`flex w-full z-50 transition-all duration-300${isScrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} `}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between lg:px-25">
                    <div className="flex items-center">
                        <a href="/" className='flex items-center'>
                            <span className='text-red-700 font-bold text-3xl'>
                                Vajra <span className="text-white">Watch</span>
                            </span>
                        </a>
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        <a href="#" className='text-white hover:text-red-700 transition-all font-medium'>
                            Home
                        </a>
                        <a href="#" className='text-white hover:text-red-700 transition-all font-medium'>
                            Trending
                        </a>
                        <a href="#" className='text-white hover:text-red-700 transition-all font-medium'>
                            Popular
                        </a>
                        <a href="#" className='text-white hover:text-red-700 transition-all font-medium'>
                            Top Rated
                        </a>
                    </nav>
                    {/*  Search bar */}
                    <div className="relative hidden lg:block">
                        <div className='hidden md:block relative search-container' ref={searchContainerRef}>
                            <div className="relative">
                                <input type="text" className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700/70' placeholder='Search Movies...' onFocus={() => {
                                    setShowSearch(true)
                                }} onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                    setIsSearching(true)
                                }
                                } />
                            </div>
                            <button className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'><CiSearch className="text-white text-2xl" /></button>
                        </div>
                        {/* dropdown */}
                        {
                            showSearch && isSearching && searchQuery && (
                                searchResult.length > 0 ? (
                                    <div className="absolute mt-2 w-80 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50 left-0 overflow-y-scroll max-h-100 scrollbar-none">
                                        <ul className='h-full'>
                                            {searchResult.map((data, idx) => {
                                                return <li key={idx} className='hover:bg-neutral-700 w-full'>
                                                    <button className='flex items-center p-3 w-full text-left cursor-pointer'>
                                                        <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden shrink-0">
                                                            <img src={getImgageURL(data.poster_path)} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="ml-3 flex-1">
                                                            <p className="text-sm font-medium text-white w-50 truncate">{data.title}</p>
                                                            <p className='text-xs text-neutral-400'>{data.release_date}</p>
                                                        </div>
                                                    </button>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50 left-0">
                                        <div className="p-4 text-center text-neutral-400 text-sm">
                                            No movies Found.
                                        </div>
                                    </div>
                                ))
                        }
                        {/* no movie found */}

                    </div>
                    {/* menu icon for mobile */}
                    <div className="lg:hidden">
                        <button className='text-white text-3xl font-extrabold' onClick={() => {
                            setMenu(true);
                        }}>
                            <CiMenuFries />
                        </button>
                    </div>
                    {/* Navbar for mobiles */}
                    <div className="fixed right-0 top-0 bottom-0 bg-neutral-800 z-99 lg:hidden flex flex-col gap-10 px-8 transition-transform duration-300" style={{ transform: `translateX(${menu ? '0%' : '100%'})` }}>
                        <div className="w-full mt-8 flex justify-end">
                            <button className='text-white text-3xl' onClick={() => {
                                setMenu(false);
                            }}>
                                <RiCloseLargeFill />
                            </button>
                        </div>
                        <div className="text-xl text-white">
                            <ul className='flex flex-col gap-5'>
                                {
                                    ['Home', 'Trending', 'Popular', 'Top Rated'].map((value, idx) => {
                                        return <li key={idx} className="">
                                            <a href={`#${value}`}>{value}</a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        {/* Search bar for mobiles */}
                        <div className='relative search-container'>
                            <div className="relative">
                                <input type="text" className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-45 transition-all duration-300 focus:outline-none ring-1 ring-red-700/70 focus:ring-2' placeholder='Search Movies...' onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                    setIsSearching(true)
                                }} />
                            </div>
                            <button className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'><CiSearch className="text-white text-2xl" /></button>
                        </div>
                        <div className="relative w-full">
                            {/* search result */}
                            {
                                isSearching && searchQuery && (
                                    searchResult.length > 0 ? (
                                        <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50 h-100">
                                            <ul className='h-full overflow-auto w-full scrollbar-none'>  {/*bug*/}
                                                {
                                                    searchResult.map((value, idx) => {
                                                        return <li key={idx} className='hover:bg-neutral-700 shadow-md md:shadow-sm'>
                                                            <button className='flex items-center p-3 w-full text-left cursor-pointer'>
                                                                <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden shrink-0">
                                                                    <img src={getImgageURL(value.poster_path)} className="w-full h-full object-cover" />
                                                                </div>
                                                                <div className="ml-3 flex-1">
                                                                    <p className="text-sm font-medium text-white w-20 md:w-25 truncate">{value.title}</p>
                                                                    <p className='text-xs text-neutral-400'>{value.release_date}</p>
                                                                </div>
                                                            </button>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                                            <div className="p-4 text-center text-neutral-400 text-sm">
                                                No movies Found.
                                            </div>
                                        </div>
                                    )
                                )
                            }
                            {/* no movie found */}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
