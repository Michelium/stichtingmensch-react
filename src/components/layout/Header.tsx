import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoClose} from "react-icons/io5";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MenuItems = ({ mobile = false }: { mobile?: boolean }) => (
        <>
            <a
                className={mobile ? "text-base font-medium tracking-tight text-slate-800" : "text-sm lg:text-base font-medium tracking-tight text-slate-600/90 hover:text-slate-900 transition-colors whitespace-nowrap"}
                href="#missie_en_visie"
                onClick={() => setMobileMenuOpen(false)}
            >
                Missie en visie
            </a>
            <a
                className={mobile ? "text-base font-medium tracking-tight text-slate-800" : "text-sm lg:text-base font-medium tracking-tight text-slate-600/90 hover:text-slate-900 transition-colors whitespace-nowrap"}
                href="#werkwijze"
                onClick={() => setMobileMenuOpen(false)}
            >
                Onze werkwijze
            </a>
            <a
                className={mobile ? "text-base font-medium tracking-tight text-slate-800" : "text-sm lg:text-base font-medium tracking-tight text-slate-600/90 hover:text-slate-900 transition-colors whitespace-nowrap"}
                href="#de_stichting"
                onClick={() => setMobileMenuOpen(false)}
            >
                De stichting
            </a>
            <a
                className={mobile ? "text-base font-medium tracking-tight text-slate-800" : "text-sm lg:text-base font-medium tracking-tight text-slate-600/90 hover:text-slate-900 transition-colors whitespace-nowrap"}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
            >
                Contact
            </a>
        </>
    );

    return (
        <>
            <header className="relative z-40 w-full border-b border-slate-200/80 bg-white/95">
                <div className="container flex h-24 items-center justify-between">
                    <a href="#" className="flex items-center">
                        <img src="/assets/images/logo.png" alt="Stichting Mensch logo" className="h-16 md:h-20 w-auto object-contain" />
                    </a>

                    <nav className="hidden md:flex items-center gap-x-6 xl:gap-x-8">
                        <MenuItems />
                    </nav>

                    <button
                        className="md:hidden text-2xl text-slate-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full z-50 px-4">
                    <nav className="container mx-auto flex flex-col items-center gap-y-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg">
                        <MenuItems mobile />
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
