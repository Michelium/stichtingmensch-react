import './index.scss';
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import MissionAndVision from "./components/sections/MissionAndVision";
import WorkingMethods from "./components/sections/WorkingMethods";
import Foundation from "./components/sections/Foundation";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <main className='flex flex-col w-full'>
            <Header/>
            <Hero/>
            <MissionAndVision/>
            <WorkingMethods/>
            <Foundation/>
            <Contact/>
        </main>
    );
}

export default App;
