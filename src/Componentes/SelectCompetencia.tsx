import axios from 'axios';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Competencia, Competencias } from '../interfaces';

interface props {
    country_id: number;
    fn: Dispatch<SetStateAction<number>>;
}

const SelectCompetencia = ({ country_id, fn }: props) => {
    const [apiData, setApiData] = useState<Competencias>([]);

    const [competenciaId, setCompetenciasId] = useState<number>(0);

    useEffect(() => {
        const getCompetencias = async () => {
            const { data } = await axios(
                `https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=${import.meta.env.VITE_API_KEY}`
            );
            setApiData(data);
        };
        getCompetencias();
    }, [country_id]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCompetenciasId(parseInt(e.target.value));
        fn(parseInt(e.target.value));
    };

    return (
        <select
            value={competenciaId}
            onChange={handleChange}
            className='my-7 w-full p-2 bg-white border border-gray-300 rounded roundend-lg text-center text-lg font-bold text-gray-400'
        >
            <option value={0}>Seleccione una Competencia</option>
            {apiData.length > 0 &&
                apiData.map((competencia) => (
                    <option key={competencia.league_id} value={competencia.league_id}>
                        {competencia.league_name}
                    </option>
                ))}
        </select>
    );
};

export default SelectCompetencia;
