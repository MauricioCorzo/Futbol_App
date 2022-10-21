import axios from 'axios';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Equipos } from '../interfaces';

interface props {
    league_id: number;
    fn: Dispatch<SetStateAction<Equipos>>;
}

const SelectTeam = ({ league_id, fn }: props) => {
    const [apiData, setApiData] = useState<Equipos>([]);

    const [equipo, setEquipo] = useState<string>('');

    useEffect(() => {
        const getEquipos = async () => {
            const { data } = await axios(
                `https://apiv3.apifootball.com/?action=get_teams&league_id=${league_id}&APIkey=${import.meta.env.VITE_API_KEY}`
            );
            setApiData(data);
        };
        getEquipos();
    }, [league_id]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setEquipo(e.target.value);
        const team = apiData.filter((team) => team.team_name === e.target.value);

        fn(team);
    };

    return (
        <>
            <label className='block text-sm uppercase text-gray-500 -mb-5 font-bold'>Equipo</label>
            <select
                value={equipo}
                onChange={handleChange}
                className='my-6 w-full p-2 bg-white border border-gray-500 rounded roundend-lg text-center text-lg font-bold text-gray-400'
            >
                <option value={0}>Seleccione un Equipo</option>
                {apiData.length > 0 &&
                    apiData.map((equipo) => (
                        <option key={equipo.team_key} value={equipo.team_name}>
                            {equipo.team_name}
                        </option>
                    ))}
            </select>
        </>
    );
};

export default SelectTeam;
