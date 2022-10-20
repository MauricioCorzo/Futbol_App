import axios from 'axios';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Pais, Paises } from '../interfaces';

type props = {
    fn: Dispatch<SetStateAction<number>>;
};

const SelectPais = ({ fn }: props) => {
    const [apiData, setApiData] = useState<Paises>([]);

    const [paisID, setPaisID] = useState<number>(0);

    useEffect(() => {
        const getPaises = async () => {
            const { data } = await axios(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${import.meta.env.VITE_API_KEY}`);
            // Ordenar Alfabeticamente los paises
            data.sort((a: Pais, b: Pais) => a.country_name.localeCompare(b.country_name, 'en'));
            //setear data
            setApiData(data);
        };
        getPaises();
    }, []);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setPaisID(parseInt(e.target.value));
        fn(parseInt(e.target.value));
    }
    return (
        <select
            value={paisID}
            onChange={handleChange}
            className='my-7 w-full p-2 bg-white border border-gray-300 rounded roundend-lg text-center text-lg font-bold text-gray-400'
        >
            <option value={0}>Seleccione un Pais</option>
            {apiData.length > 0 &&
                apiData.map((pais) => (
                    <option key={pais.country_id} value={pais.country_id}>
                        {pais.country_name}
                    </option>
                ))}
        </select>
    );
};

export default SelectPais;
