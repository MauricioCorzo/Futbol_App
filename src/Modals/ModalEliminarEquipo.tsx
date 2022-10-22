import React, { useContext } from 'react';
import { JugadoresContext } from '../Context/Context';

interface props {
    equipo: string;
}

const ModalEliminarEquipo = ({ equipo }: props) => {
    const { borrarEquipo } = useContext(JugadoresContext);

    function handleClick() {
        document.getElementById('modalBorrarEquipo')?.classList.add('hidden');
        borrarEquipo(equipo);
    }

    return (
        <div id='modalBorrarEquipo' className='hidden fixed bg-red-600 bg-opacity-50 flex justify-center items-center top-0 right-0 bottom-0 left-0'>
            <div id='modalBorrarEquipo' className=' bg-white px-16 py-14 rounded-md text-center'>
                <h1 className='text-xl mb-4 font-bold text-slate-500 pb-3'>¿Seguro quieres borrar este equipo?</h1>
                <button
                    className='bg-red-500 px-4 py-2 rounded-md text-md text-white'
                    onClick={() => {
                        document.getElementById('modalBorrarEquipo')?.classList.add('hidden');
                    }}
                >
                    Cancelar
                </button>
                <button onClick={handleClick} className='bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold'>
                    Si
                </button>
            </div>
        </div>
    );
};

export default ModalEliminarEquipo;
