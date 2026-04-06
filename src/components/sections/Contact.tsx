import React from 'react';
import {MdOutlineMail} from "react-icons/md";

const Contact = () => {

    return (
        <footer className='bg-slate-900 border-t border-slate-800 mt-10' id='contact'>
            <div className="container flex flex-col md:flex-row md:justify-between py-8 md:py-10 gap-x-12 gap-y-6 items-center">
                <img className='max-w-72 md:max-w-80 object-contain brightness-0 invert opacity-95' src="/assets/images/logo.png" alt="Stichting Mensch logo"/>
                <div className='md:w-1/3 flex flex-col gap-y-3 mt-2 md:mt-0'>
                    <p className='text-slate-100 font-semibold tracking-tight'>Stichting Mensch</p>
                    <p className='text-slate-300 text-sm md:text-base leading-relaxed inline-flex items-center gap-x-2'><MdOutlineMail className='text-emerald-300'/> <a className='text-emerald-300 hover:text-emerald-200 hover:underline underline-offset-4 transition-colors' href="mailto:info@stichtingmensch.nl">info@stichtingmensch.nl</a></p>
                    <p className='text-slate-400 text-sm leading-relaxed'>KVK: 60597364</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
