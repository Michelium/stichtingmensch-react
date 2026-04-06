import React from 'react';

const WorkingMethods = () => {
    return (
        <section className="relative my-10 md:my-14" id='werkwijze'>
            <div className="absolute inset-0">
                <img src="/assets/images/beach.png" alt="Hero background image of The Hague"
                     className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-900/65 to-mensch-green/55"></div>
            </div>

            <div className="container xl:px-32 py-12 md:py-20 relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white">Onze werkwijze</h2>
                <p className="max-w-4xl text-base md:text-lg leading-8 md:leading-9 text-slate-100/95">Wij zijn er voor het welbevinden van mensen. Wij willen dicht bij de mensen staan. Om hen een perspectief te geven op een zinvolle deelname aan het maatschappelijk leven. Wij zetten ons met
                    name in voor die mensen, bij wie dat perspectief (tijdelijk) ontbreekt en dreigen aan de kant te komen staan. Wij helpen mensen vooruit door hun grenzen te verleggen aan de hand van activiteiten en sociale verbanden in de wijk.
                    Wij laten mensen (weer) eigen kracht ervaren, bij voorkeur door talenten van mensen aan elkaar te verbinden. Dit draagt bij aan de versterking van sociale contacten, saamhorigheid en prettig wonen.</p>
            </div>
        </section>
    );
};

export default WorkingMethods;