import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Equipos, Jugadores, Player } from '../interfaces';
import { JugadoresContext } from './Context/Context';

interface props {
    team: Equipos;
}

const SelectJugador = ({ team }: props) => {
    //BOTONES
    const btn1 = document.getElementById('btn1');

    //ESTADOS Y CONTEXT
    const { jugadoresState, agregarJugador } = useContext(JugadoresContext);

    const [jugadores, setJugadores] = useState<Jugadores>([]);

    const [idJugador, setIdJugador] = useState<number>(0);

    const [jugador, setJugador] = useState<Player>({} as Player);

    useEffect(() => {
        setJugadores(team[0].players);
    }, [team]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setIdJugador(parseInt(e.target.value));
        const [jugadorSeleccionado] = jugadores.filter((player) => player.player_id === e.target.value);
        jugadorSeleccionado.player_team = team[0].team_name;
        setJugador(jugadorSeleccionado);
    };

    function handleClick() {
        if (jugadoresState.jugadores.length > 4) {
            btn1?.setAttribute('disabled', 'true');
            return;
        }
        document.getElementById('myToast')?.classList.remove('hidden');

        agregarJugador(jugador);

        setTimeout(() => {
            document.getElementById('myToast')?.classList.add('hidden');
        }, 3000);
    }

    return (
        <>
            <select
                value={idJugador}
                onChange={handleChange}
                className='my-7 w-full p-2 bg-white border border-gray-300 rounded roundend-lg text-center text-lg font-bold text-gray-400'
            >
                <option value={0}>Seleccione un Jugador</option>
                {jugadores?.length > 0 &&
                    jugadores?.map((player) => (
                        <option key={player.player_id} value={player.player_id}>
                            {player.player_name}
                        </option>
                    ))}
            </select>

            {idJugador ? (
                <div className='flex justify-between my-3'>
                    <button
                        id='btn1'
                        type='button'
                        onClick={handleClick}
                        className='my-4 px-6 py-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'
                    >
                        Equipo 1
                    </button>
                    <button
                        type='button'
                        onClick={handleClick}
                        className='my-4 px-6 py-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'
                    >
                        Equipo 2
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default SelectJugador;
