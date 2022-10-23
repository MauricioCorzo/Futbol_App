import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { animaciones, camisetaRandom, comprobarImagen } from '../helpers';
import { Player } from '../interfaces';

interface props {
    jugador: Player;
    setIdJugador: Dispatch<SetStateAction<string>>;
}

const CardJugador = ({ jugador, setIdJugador }: props) => {
    const [imagen, setImagen] = useState<boolean | undefined>(false);

    //ALGUNAS URL NO TRAEN FOTO, ACA COMPRUEBO EL ERROR
    useEffect(() => {
        comprobarImagen(`${jugador.player_image}`)
            .then((r: string | undefined) => {
                if (r?.endsWith('Error')) setImagen(true);
                if (r?.endsWith('404')) setImagen(false);
            })
            .catch((r: any) => r);

        animaciones(0);
    }, []);

    function handleClick() {
        setIdJugador(jugador.player_id);
        document.getElementById('modalBorrarJugador')?.classList.remove('hidden');
    }

    return (
        <>
            <li key={jugador.player_id} className=''>
                <div
                    className='md:flex lg:p-2 lg:w-full lg:flex lg:flex-row lg:items-center space-y-4 lg:space-x-0 space-x-10 md:space-y-0 lg:gap-5 opacity-0 duration-1000 relative transform transition-all'
                    data-replace='{ "opacity-0": "opacity-100" }'
                >
                    <div className='sm:w-1/4 md:w-1/6 lg:w-2/6 '>
                        <img
                            src={jugador.player_image && imagen ? jugador.player_image : 'src/images/user404.png'}
                            alt='Avatar'
                            className='rounded-full w-32 lg:ml-0 ml-10'
                        />
                    </div>
                    <div className='sm:w-2/4 md:w-3/6 lg:w-4/6 space-y-2 '>
                        <p className='block text-1xl font-extrabold text-indigo-600 truncate'>Jugador: {jugador.player_name}</p>
                        <div className='w-6 h-6 flex flex-row'>
                            <img src='src/images/camiseta.png' className='rounded-full w-32' />
                            <p className='font-semibold mx-1 '>{jugador.player_number ? jugador.player_number : camisetaRandom()}</p>
                        </div>
                        <p className='text-1xl text-indigo-500'>Club: {jugador.player_team}</p>
                    </div>
                    <button
                        type='button'
                        className='box-content sm:w-2 lg:pb-16 lg:pl-0 pb-3 w-full pl-12 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-600 hover:opacity-75 hover:no-underline ease-in-out delay-150 hover:cursor-pointer transition hover:-translate-y-0 hover:scale-110 duration-300'
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
