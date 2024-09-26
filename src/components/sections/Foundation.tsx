import React from 'react';

const Foundation = () => {
    return (
        <section className='bg-gray-100 my-10' id='de_stichting'>
            <div className="container flex flex-col md:flex-row items-center py-16 gap-y-10 md:gap-x-10">
                <div className='w-2/3'>
                    <h2 className="text-4xl font-bold leading-tight mb-4 text-[#333]">De stichting</h2>
                    <p className='text-gray-600'>
                        Stichting Mensch is ontstaan in 2014 doordat we hebben gezien dat er in het werkveld van welzijn teveel fragmentatie is van (zelf)organisaties. Dit is jammer en komt niet ten goede van de inwoners. Wij als Stichting Mensch
                        trachten om de fragmentatie te verminderen door organisaties, aanbod en mensen aan elkaar te koppelen. Op een manier dat we generalistisch inzetten, maar wel maatwerk leveren.
                    </p>
                </div>
                <div className='w-2/3 lg:w-1/3'>
                    <img src="/assets/images/tree.png" className='rounded-2xl lg:max-h-80' alt="Missie en visie"/>
                </div>
            </div>
        </section>
    );
};

export default Foundation;