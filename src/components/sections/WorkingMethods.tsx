import React from 'react';

const WorkingMethods = () => {
    return (
        <section className="relative my-10" id='werkwijze'>
            <div className="absolute inset-0">
                <img src="/assets/images/beach.png" alt="Hero background image of The Hague"
                     className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="container xl:px-32 py-10 md:py-20 relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h2 className="text-4xl font-bold leading-tight mb-8 text-white">Onze werkwijze</h2>
                <p className="text-lg text-white">Wij zijn er voor het welbevinden van mensen. Wij willen dicht bij de mensen staan. Om hen een perspectief te geven op een zinvolle deelname aan het maatschappelijk leven. Wij zetten ons met
                    name in voor die mensen, bij wie dat perspectief (tijdelijk) ontbreekt en dreigen aan de kant te komen staan. Wij helpen mensen vooruit door hun grenzen te verleggen aan de hand van activiteiten en sociale verbanden in de wijk.
                    Wij laten mensen (weer) eigen kracht ervaren, bij voorkeur door talenten van mensen aan elkaar te verbinden. Dit draagt bij aan de versterking van sociale contacten, saamhorigheid en prettig wonen.</p>
            </div>
        </section>
    );
};

export default WorkingMethods;