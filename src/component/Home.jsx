import React from 'react';
import homebanner from '../assets/img/homeBanner.png';

const Home = () => {
    return (
        <div className="relative flex items-center justify-center text-white lg:h-[60vh] h-[50vh] sm:h-[40vh]">

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
                    zIndex: 0,
                }}
            />
            <div className="relative z-10 p-4 sm:p-2"> {/* Added padding for smaller devices */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-xl sm:text-lg xs:text-base font-bold text-[--secondary] md:text-4xl lg:text-2xl">
                        <div className="text-center text-2xl md:text-4xl">
                            Build strategic and operational <br className="hidden sm:block" /> excellence through curated <br className="hidden sm:block" />
                            HR technology solutions
                        </div>
                    </h1>
                    <button className="mt-6 rounded-lg bg-white px-4 py-2 font-bold text-black text-lg sm:text-lg">
                        Contact us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
