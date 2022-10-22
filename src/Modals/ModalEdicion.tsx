import React, { Dispatch, SetStateAction, useState } from 'react';

interface props {
    setNombreEquipo: Dispatch<SetStateAction<string>>;
}

export const ModalEdicion = ({ setNombreEquipo }: props) => {
    const [nombre, setNombre] = useState('');

    const handleSubmit = () => {
        document.getElementById('modalEdicion')?.classList.add('hidden');
        setNombreEquipo(nombre);
    };

    return (
        <div id='modalEdicion' className='container flex justify-center mx-auto hidden'>
            <div className='absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50'>
                <div className='max-w-2xl p-6 bg-white'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-2xl'>Editar Nombre</h3>
                        <button
                            className='ease-in-out delay-150 hover:cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300'
                            onClick={() => {
                                document.getElementById('modalEdicion')?.classList.add('hidden');
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className='mt-4'>
                        <div className='mb-5'>
                            <label htmlFor='name' className='block font-bold text-gray-600 mb-1'>
                                Nuevo Nombre
                            </label>
                            <input
                                type='text'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                name='name'
                                className='w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-indigo-600'
                                placeholder='Nombre de equipo'
                            />
                        </div>

                        <button onClick={handleSubmit} className='block w-full p-3 font-bold text-white bg-blue-500 rounded-l'>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
