import React, { Dispatch, SetStateAction } from 'react';
import { Player } from '../interfaces';
import CardJugador from './CardJugador';

interface props {
    jugadores: Player[];
    equipo: string;
    nombreEquipo: string;
    modal: string;
    setIdJugador: Dispatch<SetStateAction<string>>;
    setEquipoEliminar: Dispatch<SetStateAction<string>>;
    setModal: Dispatch<SetStateAction<string>>;
}

const ListaJugadores = ({ jugadores, equipo, nombreEquipo, modal, setModal, setIdJugador, setEquipoEliminar }: props) => {
    const handleClick = () => {
        setModal(modal);
        document.getElementById('modalEdicion')?.classList.remove('hidden');
    };

    const eliminarEquipo = () => {
        document.getElementById('modalBorrarEquipo')?.classList.remove('hidden');
        setEquipoEliminar(equipo);
    };

    return (
        <>
            <div className='lg:row-start-1 lg:row-end-4 my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>
                <div className='flex justify-end'>
                    <button
                        onClick={eliminarEquipo}
                        className='box-content text-xl text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-600 hover:opacity-75 hover:no-underline ease-in-out delay-150 hover:cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300'
                    >
                        X
                    </button>
                </div>
                <h1 className='text-3xl font-extrabold text-gray-500 text-center mb-3'>
                    Equipo <span className='text-indigo-600'>{equipo}</span>
                </h1>
                <div className='flex items-center flex-col mb-5'>
                    <h1 className='text-xl font-extrabold text-gray-500 text-center'>
                        <span className='text-indigo-600'> {nombreEquipo}</span>
                    </h1>
                    <button
                        type='button'
                        onClick={handleClick}
                        className='inline-block px-6 py-2.5 text-blue-400 font-medium text-xs leading-tight  hover:text-blue-700 transition duration-150 ease-in-out'
                    >
                        Editar nombre
                    </button>
                </div>

                <div className='bg-gray-50 shadow roundend-lg '>
                    <ul className='divide-white divide-y-4'>
                        {jugadores.map((jugador) => (
                            <CardJugador key={jugador.player_id} jugador={jugador} setIdJugador={setIdJugador} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ListaJugadores;
