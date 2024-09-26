import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r h-[calc(100vh-5rem)] lg:h-[60vh] text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src="/assets/images/thehague.jpg" alt="Hero background image of The Hague"
                     className="object-cover object-center w-full h-full blur"/>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">Stichting Mensch</h1>
                <p className="text-lg text-gray-300 mb-8">Maatschappelijk en sociale cohesie</p>
            </div>
        </div>

    );
};

export default Hero;