import React, { Dispatch, SetStateAction } from 'react';
import { camisetaRandom } from '../helpers/repetidos';
import { Player } from '../interfaces';

interface props {
    jugador: Player;
    setIdJugador: Dispatch<SetStateAction<string>>;
}

const CardJugador = ({ jugador, setIdJugador }: props) => {
    function handleClick() {
        setIdJugador(jugador.player_id);
        document.getElementById('modalBorrarJugador')?.classList.remove('hidden');
    }

    return (
        <>
            <li key={jugador.player_id}>
                <div className='p-2 w-full flex flex-row items-center sm:flex-row sm:items-center sm:justify-between space-y-4 md:space-y-0 gap-5'>
                    <div className='sm:w-1/4 md:w-1/6 lg:w-1/6'>
                        <img
                            src={jugador.player_image ? jugador.player_image : 'src/images/user404.png'}
                            alt='Avatar'
                            className='rounded-full w-32'
                        />
                    </div>
                    <div className='sm:w-2/4 md:w-3/6 lg:w-4/6 space-y-3'>
                        <p className='block text-1xl font-extrabold text-indigo-600 truncate'>Jugador: {jugador.player_name}</p>
                        <div className='w-6 h-6 flex flex-row'>
                            <img src='src/images/camiseta.png' className='rounded-full w-32' />
                            <p className='font-semibold mx-1 '>{jugador.player_number ? jugador.player_number : camisetaRandom()}</p>
                        </div>
                        <p className='text-1xl text-indigo-500'>Club: {jugador.player_team}</p>
                    </div>
                    <button
                        type='button'
                        className='box-content sm:w-2 sm:pb-16 sm:pl-0 pb-20 px-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-600 hover:opacity-75 hover:no-underline ease-in-out delay-150 hover:cursor-pointer transition hover:-translate-y0 hover:scale-110 duration-300'
                        onClick={handleClick}
                    >
                        X
                    </button>
                </div>
            </li>
        </>
    );
};

export default CardJugador;
