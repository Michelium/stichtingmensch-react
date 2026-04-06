import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden text-white">
            <div className="absolute inset-0">
                <img src="/assets/images/the_hague.jpg" alt="Hero background image of The Hague"
                     className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/65 to-mensch-green/35"></div>
            </div>

            <div className="container relative z-10 grid min-h-[68vh] md:min-h-[74vh] items-center gap-10 py-16 md:grid-cols-2 md:py-20">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Stichting Mensch</h1>
                    <p className="mt-4 text-lg md:text-2xl leading-relaxed tracking-tight text-slate-100/90">Maatschappelijk en sociale cohesie</p>
                </div>

                <div className="rounded-3xl bg-white/12 backdrop-blur-sm border border-white/25 p-6 md:p-8 shadow-2xl">
                    <p className="text-lg md:text-xl leading-8 text-slate-100/95">
                        Een <span className="italic text-white font-semibold">mensch</span> is iemand die bewonderenswaardig is, iemand die handelt met empathie, eerlijkheid en een sterk gevoel van wat juist is.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Hero;