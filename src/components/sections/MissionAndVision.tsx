import React from 'react';

const MissionAndVision = () => {
    return (
        <section className='container py-10 md:py-14' id='missie_en_visie'>
            <div className="flex flex-col-reverse md:flex-row items-center gap-y-10 md:gap-x-12 rounded-3xl bg-white/80 p-5 md:p-8 ring-1 ring-slate-200/70 shadow-sm">
                <div className='md:w-1/3'>
                    <img src="/assets/images/goals.jpg" className='rounded-2xl' alt="Missie en visie"/>
                </div>
                <div className='md:w-2/3'>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Missie en visie</h2>
                    <p className='mt-5 text-base md:text-lg leading-8 text-slate-600'>
                        Maatschappelijke en sociale bijdrage en leveren aan de leefomgeving ter bevordering van de cohesie en ontwikkeling van de mens. <br/><br/>
                        Het verrichten van alle verdere handelingen, die met het vorenstaande in de ruimste zin verband houden of daartoe bevorderlijk kunnen zijn.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;