import React from 'react';
import { useState } from 'react';

import homebanner from '../assets/img/homeBanner.png';
import logo from "../assets/img/TalentInsights.png"

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <div className="relative flex flex-col items-center justify-center text-white lg:h-[76vh] h-[76vh]">
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${homebanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1,
                }}
            />

            {/* Navigation Bar */}
            <div className="w-full absolute top-0 left-0 z-10">
                <nav className="flex justify-between items-center p-4">
                    <div className="text-lg font-bold"><img className='w-24 md:w-40' src={logo} alt="logo" /></div>
                    <ul className={`md:flex hidden font-semibold space-x-14 items-center`}>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#solution" className="hover:text-gray-300">Solution</a></li>
                        <li><a href="#expertise" className="hover:text-gray-300">Area of Expertise</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact us</a></li>
                    </ul>

                    {/* Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0  w-full h-[42vh] bg-white`}>
                        <ul className="font-semibold text-black text-left">
                            <li className="p-4 border-b border-gray-700"><a href="#about" className="hover:text-gray-300">About</a></li>
                            <li className="p-4 border-b border-gray-700"><a href="#solution" className="hover:text-gray-300">Solution</a></li>
                            <li className="p-4 border-b border-gray-700"><a href="#expertise" className="hover:text-gray-300">Area of Expertise</a></li>
                            <li className="p-4 border-b border-gray-700"><a href="#files" className="hover:text-gray-300">Think Files</a></li>
                            <li className="p-4"><a href="#contact" className="hover:text-gray-300">Contact us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="relative z-10 p-4 sm:p-2 mt-20 md:mt-32 lg:mt-40"> {/* Adjust top margin as per the nav height */}
                <div className="flex flex-col mb-14 items-center justify-center">
                    <h1 className="mb-4 text-xl sm:text-lg xs:text-base font-bold md:text-3xl lg:text-3xl">
                        <div className="text-center">
                            Build strategic and operational <br className="hidden sm:block" /> excellence through curated <br className="hidden sm:block" />
                            HR technology solutions
                        </div>
                    </h1>
                    <button className="md:mt-10 mt-16 rounded-lg bg-white px-4 py-2 font-bold text-black text-lg sm:text-lg">
                        Contact us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
