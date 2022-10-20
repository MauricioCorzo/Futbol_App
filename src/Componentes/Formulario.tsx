import React, { useEffect, useState } from 'react';
import { Equipos, Jugadores } from '../interfaces';
import SelectCompetencia from './SelectCompetencia';
import SelectJugador from './SelectJugador';
import SelectPais from './SelectPais';
import SelectTeam from './SelectTeam';

const Formulario = () => {
    const [selectPais, setSelectPais] = useState<number>(0);
    const [selectCompetencia, setSelectCompetencia] = useState<number>(0);
    const [selectEquipo, setSelectEquipo] = useState<Equipos>([]);

    useEffect(() => {
        setSelectCompetencia(0);
        setSelectEquipo([]);
    }, [selectPais]);

    useEffect(() => {
        setSelectEquipo([]);
    }, [selectCompetencia]);

    return (
        <div className='my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>
            <h1 className='text-3xl font-extrabold text-gray-500 text-center mb-10'>
                ¡Crea tu <span className='text-indigo-600'>equipo </span> ideal!
            </h1>

            <SelectPais fn={setSelectPais} />
            {selectPais != 0 && <SelectCompetencia country_id={selectPais} fn={setSelectCompetencia} />}
            {selectPais != 0 && selectCompetencia != 0 && <SelectTeam league_id={selectCompetencia} fn={setSelectEquipo} />}
            {selectPais != 0 && selectCompetencia != 0 && selectEquipo.length != 0 && <SelectJugador team={selectEquipo} />}
        </div>
    );
};

export default Formulario;
