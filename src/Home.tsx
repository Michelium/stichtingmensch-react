import './index.scss';
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

function App() {
    return (
        <main className='flex flex-col w-full'>
            <Header/>
            <Hero/>
        </main>
    );
}

export default App;
