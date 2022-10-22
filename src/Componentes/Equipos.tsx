import React, { useContext, useState } from 'react';
import { JugadoresContext } from '../Context/Context';
import ListaJugadores from './ListaJugadores';
import ModalBorrarJugador from '../Modals/ModalBorrarJugador';
import { ModalEdicion } from '../Modals/ModalEdicion';
import ModalEliminarEquipo from '../Modals/ModalEliminarEquipo';

export const Equipos = () => {
    //Context
    const { jugadoresState } = useContext(JugadoresContext);

    const { jugadores1, jugadores2 } = jugadoresState;

    // Estados
    const [nombreEquipo1, setNombreEquipo1] = useState<string>('Los Vengadores');

    const [nombreEquipo2, setNombreEquipo2] = useState<string>('Liga de la Justicia');

    const [modal, setModal] = useState<string>('');

    const [idJugador, setIdJugador] = useState<string>('');

    const [equipoEliminar, setEquipoEliminar] = useState('');

    return (
        <>
            {jugadores1.length == 0 && jugadores2.length == 0 && (
                <div className='my-20 mx-10 max-w-2xl mx-full sm:pt-40 sm:pr-44'>
                    <h1 className='text-2xl font-extrabold text-indigo-600 text-center mb-10'>No hay equipos aún.¡Crea uno!</h1>
                </div>
            )}
            {jugadores1.length > 0 && (
                <ListaJugadores
                    jugadores={jugadores1}
                    equipo='A'
                    modal='A'
                    nombreEquipo={nombreEquipo1}
                    setModal={setModal}
                    setIdJugador={setIdJugador}
                    setEquipoEliminar={setEquipoEliminar}
                />
            )}
            {jugadores2.length > 0 && (
                <ListaJugadores
                    jugadores={jugadores2}
                    equipo='B'
                    modal='B'
                    nombreEquipo={nombreEquipo2}
                    setModal={setModal}
                    setIdJugador={setIdJugador}
                    setEquipoEliminar={setEquipoEliminar}
                />
            )}
            {modal === 'A' ? <ModalEdicion setNombreEquipo={setNombreEquipo1} /> : <ModalEdicion setNombreEquipo={setNombreEquipo2} />}
            <ModalBorrarJugador idJugador={idJugador} />
            <ModalEliminarEquipo equipo={equipoEliminar} />
        </>
    );
};
