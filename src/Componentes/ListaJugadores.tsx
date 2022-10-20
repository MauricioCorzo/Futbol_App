import React, { useContext } from 'react';
import { JugadoresContext } from './Context/Context';

const ListaJugadores = () => {
    const { jugadoresState } = useContext(JugadoresContext);

    const { jugadores } = jugadoresState;

    return (
        <div className='my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>
            <div className='bg-gray-50 shadow roundend-lg'>
                <ul className='divide-y-4 divide-gray-400'>
                    {jugadores.map((jugador) => (
                        <li key={jugador.player_id}>
                            <div className='p-6 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-8 md:space-y-0 gap-5'>
                                <div className='sm:w-1/4 md:w-1/6 lg:w-1/6'>
                                    <img src={jugador.player_image} alt='Avatar' className='rounded-full w-32' />
                                </div>
                                <div className='sm:w-2/4 md:w-3/6 lg:w-4/6 space-y-3'>
                                    <p className='block text-1xl font-extrabold text-indigo-600 truncate'>Jugador: {jugador.player_name}</p>
                                    <div className='w-6 h-6 flex flex-row'>
                                        <img src='src/Componentes/images/camiseta.png' className='rounded-full w-32 ' />
                                        <p className='font-semibold mx-1 '>{jugador.player_number}</p>
                                    </div>
                                    <p className='text-1xl text-indigo-500'>Club: {jugador.player_team}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaJugadores;
