import React from 'react';

const Foundation = () => {
    return (
        <section className='bg-slate-100/70 border-y border-slate-200/70 my-10 md:my-14' id='de_stichting'>
            <div className="container flex flex-col md:flex-row items-center py-14 md:py-16 gap-y-10 md:gap-x-10">
                <div className='md:w-2/3'>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4 text-slate-900">De stichting</h2>
                    <p className='text-base md:text-lg leading-8 text-slate-600/95'>
                        Stichting Mensch is ontstaan in 2014 doordat we hebben gezien dat er in het werkveld van welzijn teveel fragmentatie is van (zelf)organisaties. Dit is jammer en komt niet ten goede van de inwoners. Wij als Stichting Mensch
                        trachten om de fragmentatie te verminderen door organisaties, aanbod en mensen aan elkaar te koppelen. Op een manier dat we generalistisch inzetten, maar wel maatwerk leveren.
                    </p>
                </div>
                <div className='md:w-1/3'>
                    <img src="/assets/images/tree.png" className='rounded-3xl lg:max-h-80 ring-1 ring-slate-300/60 shadow-sm' alt="Missie en visie"/>
                </div>
            </div>
        </section>
    );
};

export default Foundation;