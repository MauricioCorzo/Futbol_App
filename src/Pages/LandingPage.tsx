import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animaciones } from '../helpers';

const LandingPage = () => {
    useEffect(() => {
        animaciones(200);
    }, []);

    return (
        <div>
            <section className='mb-0'>
                <div className='px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left'>
                    <div className='container mx-auto xl:px-32'>
                        <div className='grid lg:grid-cols-2 gap-12 flex items-center lg:-mt-3 mt-5'>
                            <div
                                className='mt-12 lg:mt-0 duration-[2500ms] relative transform transition-all -translate-y-96 ease-out opacity-0'
                                data-replace='{ "-translate-y-96": "translate-y-0", "opacity-0": "opacity-100" }'
                            >
                                <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6'>
                                    Bienvenido a<br />
                                    <span className='text-blue-600'>DREAM TEAM</span>
                                </h1>

                                <Link to={'/home'}>
                                    <button
                                        className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out'
                                        data-mdb-ripple='true'
                                        data-mdb-ripple-color='light'
                                        role='button'
                                    >
                                        ¡Comencemos!
                                    </button>
                                </Link>
                                <a
                                    className='inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
                                    data-mdb-ripple='true'
                                    data-mdb-ripple-color='light'
                                    href='https://github.com/MauricioCorzo'
                                    role='button'
                                >
                                    Mi Github
                                </a>
                                <img src='src/images/github.png' className='inline-block mb-1 py-3 -ml-7 scale-50' />
                            </div>

                            <div className='lg:pt-10 lg:mb-0'>
                                <img
                                    src='src/images/Player.png'
                                    className='w-full lg:scale-125 scale-100 -ml-7 mt-10 duration-[2500ms] relative transform transition-all translate-y-96 ease-out opacity-0'
                                    data-replace='{ "translate-y-96": "translate-y-0", "opacity-0": "opacity-100" }'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
