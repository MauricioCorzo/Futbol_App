import React, { useContext, useState } from 'react';
import { JugadoresContext } from '../Context/Context';
import ListaJugadores from './ListaJugadores';
import ModalBorrarJugador from './ModalBorrarJugador';
import { ModalEdicion } from './ModalEdicion';

export const Equipos = () => {
    //Context
    const { jugadoresState } = useContext(JugadoresContext);

    const { jugadores1, jugadores2 } = jugadoresState;

    // Estados
    const [nombreEquipo1, setNombreEquipo1] = useState<string>('Los Vengadores');

    const [nombreEquipo2, setNombreEquipo2] = useState<string>('Liga de la Justicia');

    const [modal, setModal] = useState<string>('');

    const [idJugador, setIdJugador] = useState<string>('');

    return (
        <>
            {jugadores1.length > 0 && (
                <ListaJugadores
                    jugadores={jugadores1}
                    equipo='A'
                    modal='A'
                    nombreEquipo={nombreEquipo1}
                    setModal={setModal}
                    setIdJugador={setIdJugador}
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
                />
            )}
            {modal === 'A' ? <ModalEdicion setNombreEquipo={setNombreEquipo1} /> : <ModalEdicion setNombreEquipo={setNombreEquipo2} />}
            <ModalBorrarJugador idJugador={idJugador} />
        </>
    );
};
