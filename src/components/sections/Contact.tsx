import React, { useRef, useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);

    const [formSuccess, setFormSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); 

    const sendEmail = (e: any) => {
        if (formSuccess || loading) return;

        e.preventDefault();
        setLoading(true);

        if (!form.current) {
            console.error('Form is not defined.');
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_n68sv0h', 'template_1rt5eiv', form.current, 'user_5EsQHMW2uTGVfimVRKRFU')
            .then((result) => {
                setFormSuccess(true);
                setSuccessMessage('Uw bericht is succesvol verzonden!');
                form.current?.reset();
                setLoading(false);
            }, (error) => {
                console.error(error.text);
                setLoading(false);
            });
    };

    const inputField = (name: string, label: string, required: boolean) => (
        <div className='my-2 w-full'>
            <label className='font-medium text-sm' htmlFor={name}>{label}</label>
            <input className='bg-gray-200 w-full py-1 px-3 rounded-md mt-1' name={name} id={name} required={required}></input>
        </div>
    )

    return (
        <section className='bg-gray-100 mt-10' id='contact'>
            <div className="container flex flex-col md:flex-row md:justify-between py-5 gap-x-12">
                <div className='md:w-1/2'>
                    <h2 className="text-4xl font-bold leading-tight mb-4 text-[#333]">Contacteer ons</h2>

                    {successMessage && <p className="text-green-600 font-bold mb-4">{successMessage}</p>}

                    <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
                        {inputField('name', 'Volledige naam:', true)}
                        {inputField('email', 'E-mailadres:', true)}
                        {inputField('phone', 'Telefoonnummer:', false)}
                        {inputField('message', 'Bericht:', true)}

                        <button
                            type='submit'
                            disabled={formSuccess || loading}
                            className='bg-mensch-green text-white w-40 rounded-3xl py-1.5 mt-5 hover:bg-green-600 transition hover:cursor-pointer'>
                            {loading ? 'Sturen...' : 'Verzenden'}
                        </button>
                    </form>
                </div>
                <div className='md:w-1/3 flex flex-col mt-16 md:mt-0'>
                    <img className='max-w-96 object-contain' src="/assets/images/logo.png" alt="Stichting Mensch logo"/>
                    <p className='mt-5 text-gray-600'>Stichting Mensch <br/></p>
                    <p className='mt-5 text-gray-600 inline-flex items-center gap-x-2'><MdOutlineMail/> <a className='text-green-600 hover:underline' href="mailto:info@stichtingmensch.nl">info@stichtingmensch.nl</a><br/></p>
                    <p className='mt-5 text-gray-600'>KVK: 60597364 <br/></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
