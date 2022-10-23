import React, { useEffect, useState } from 'react';
import { animaciones } from '../helpers';
import { Equipos } from '../interfaces';
import SelectCompetencia from './SelectCompetencia';
import SelectJugador from './SelectJugador';
import SelectPais from './SelectPais';
import SelectTeam from './SelectTeam';

const Formulario = () => {
    const [selectPais, setSelectPais] = useState<number>(0);
    const [selectCompetencia, setSelectCompetencia] = useState<number>(0);
    const [selectEquipo, setSelectEquipo] = useState<Equipos>([]);

    useEffect(() => {
        animaciones(500);
        setSelectCompetencia(0);
        setSelectEquipo([]);
    }, [selectPais]);

    useEffect(() => {
        setSelectEquipo([]);
    }, [selectCompetencia]);

    return (
        <div
            className='lg:row-end-3 lg:row-span-2 lg:my-20 my-4 mx-10 max-w-2xl mx-full bg-white shadow-lg p-10 duration-1000 relative transform transition-all -translate-x-96 ease-out opacity-0'
            data-replace='{ "-translate-x-96": "translate-y-0", "opacity-0": "opacity-100" }'
        >
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
