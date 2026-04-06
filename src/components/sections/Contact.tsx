import React from 'react';
import {MdOutlineMail} from "react-icons/md";

const Contact = () => {

    return (
        <section className='bg-gray-100 mt-10' id='contact'>
            <div className="container flex flex-col md:flex-row md:justify-between py-5 gap-x-12">
                <img className='max-w-96 object-contain' src="/assets/images/logo.png" alt="Stichting Mensch logo"/>
                <div className='md:w-1/3 flex flex-col mt-16 md:mt-0'>
                    <p className='mt-5 text-gray-600 font-bold'>Stichting Mensch <br/></p>
                    <p className='mt-5 text-gray-600 inline-flex items-center gap-x-2'><MdOutlineMail/> <a className='text-green-600 hover:underline' href="mailto:info@stichtingmensch.nl">info@stichtingmensch.nl</a><br/></p>
                    <p className='mt-5 text-gray-600 text-sm'>KVK: 60597364 <br/></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
