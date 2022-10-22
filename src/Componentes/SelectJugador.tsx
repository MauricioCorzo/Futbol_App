import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Equipos, Jugadores, Player } from '../interfaces';
import { JugadoresContext } from '../Context/Context';
import { comprobarRepetidos } from '../helpers/repetidos';

interface props {
    team: Equipos;
}

const SelectJugador = ({ team }: props) => {
    //BOTONES
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    //ESTADOS Y CONTEXT
    const { jugadoresState, agregarJugador1, agregarJugador2 } = useContext(JugadoresContext);

    const { jugadores1, jugadores2 } = jugadoresState;

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

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (e.currentTarget.id == 'btn1') {
            if (comprobarRepetidos(jugadores1, jugadores2, idJugador)) {
                document.getElementById('myToastError')?.classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('myToastError')?.classList.add('hidden');
                }, 2500);
                return;
            }
            if (jugadores1.length > 4) {
                btn1?.setAttribute('disabled', 'true');
                return;
            }
            document.getElementById('myToast')?.classList.remove('hidden');
            agregarJugador1(jugador);
        }

        if (e.currentTarget.id == 'btn2') {
            if (comprobarRepetidos(jugadores1, jugadores2, idJugador)) {
                document.getElementById('myToastError')?.classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('myToastError')?.classList.add('hidden');
                }, 2500);
                return;
            }
            if (jugadores2.length > 4) {
                btn2?.setAttribute('disabled', 'true');
                return;
            }
            document.getElementById('myToast')?.classList.remove('hidden');
            agregarJugador2(jugador);
        }

        setTimeout(() => {
            document.getElementById('myToast')?.classList.add('hidden');
        }, 3000);
    }

    return (
        <>
            <label className='block text-sm uppercase text-gray-500 -mb-5 font-bold'>Jugador</label>

            <select
                value={idJugador}
                onChange={handleChange}
                className='my-6 w-full p-2 bg-white border border-gray-500 rounded roundend-lg text-center text-lg font-bold text-gray-400'
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
                        className='my-4 px-6 py-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg hover:scale-110 transition duration-500 ease-in-out'
                    >
                        Agregar a Equipo A
                    </button>
                    <button
                        type='button'
                        id='btn2'
                        onClick={handleClick}
                        className='my-4 px-4 py-3 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg hover:scale-110 transition duration-500 ease-in-out'
                    >
                        Agregar a Equipo B
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default SelectJugador;
