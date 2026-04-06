import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden text-white">
            <div className="absolute inset-0">
                <img src="/assets/images/the_hague.jpg" alt="Hero background image of The Hague"
                     className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/65 to-mensch-green/35"></div>
                <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-mensch-green/20 blur-3xl"></div>
            </div>

            <div className="container relative z-10 grid min-h-[68vh] items-center gap-10 py-16 md:min-h-[74vh] md:grid-cols-2 md:py-20">
                <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200/90">Stichting in Den Haag</p>
                    <h1 className="mt-3 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-7xl">
                        Stichting <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Mensch</span>
                    </h1>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-100/90 md:text-2xl">Maatschappelijke verbinding en sociale cohesie, met aandacht voor menselijke waardigheid.</p>
                </div>

                <div className="rounded-3xl border border-white/25 bg-white/12 p-6 shadow-2xl backdrop-blur-md md:p-8">
                    <p className="text-lg leading-8 text-slate-100/95 md:text-xl">
                        Een <span className="italic text-white font-semibold">mensch</span> is iemand die bewonderenswaardig is, iemand die handelt met empathie, eerlijkheid en een sterk gevoel van wat juist is.
                    </p>
                    <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent"></div>
                    <p className="text-sm leading-6 text-slate-200/90">
                        Deze betekenis vormt de basis van alles wat wij doen: mensen samenbrengen en ruimte maken voor duurzame betrokkenheid.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Hero;