import React from 'react';

const MissionAndVision = () => {
    return (
        <section className='container' id='missie_en_visie'>
            <div className="flex flex-col-reverse md:flex-row items-center my-10 gap-y-10 md:gap-x-10">
                <div className='md:w-1/3'>
                    <img src="/assets/images/goals.jpg" className='rounded-2xl' alt="Missie en visie"/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold leading-tight mb-4 text-[#333]">Missie en visie</h2>
                    <p className='text-gray-600'>
                        Maatschappelijke en sociale bijdrage en leveren aan de leefomgeving ter bevordering van de cohesie en ontwikkeling van de mens. <br/><br/>
                        Het verrichten van alle verdere handelingen, die met het vorenstaande in de ruimste zin verband houden of daartoe bevorderlijk kunnen zijn.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;