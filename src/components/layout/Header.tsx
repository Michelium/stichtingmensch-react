import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoClose} from "react-icons/io5";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MenuItems = () => (
        <>
            <a className="text-md lg:text-lg whitespace-nowrap" href="">
                Missie en visie
            </a>
            <a className="text-md lg:text-lg whitespace-nowrap" href="">
                Onze werkwijze
            </a>
            <a className="text-md lg:text-lg whitespace-nowrap" href="">
                De stichting
            </a>
            <a className="text-md lg:text-lg whitespace-nowrap" href="">
                Contact
            </a>
        </>
    );

    return (
        <>
            <header className="flex justify-between container h-[4rem] mx-auto px-4 lg:px-0 pt-5">
                <div className='flex items-center'>
                    <a className="" href="">
                        <img src="/assets/images/logo.png" alt="logo" className="w-3/5 lg:p-3 y-auto object-contain xl:max-h-24" />
                    </a>
                </div>
                <nav className="hidden md:flex my-auto md:gap-x-5 xl:gap-x-12">
                    <MenuItems />
                </nav>
                <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
                    {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </header>

            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-lg">
                    <nav className="flex flex-col items-center gap-y-4 p-4">
                        <MenuItems />
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
