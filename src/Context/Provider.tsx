import React, { useReducer } from 'react';
import { Player } from '../interfaces';
import { JugadoresContext } from './Context';
import { INITIAL_STATE, jugadoresReducer } from './Reducer';

interface props {
    children: JSX.Element | JSX.Element[];
}

export const JugadoresProvider = ({ children }: props) => {
    const [jugadoresState, dispatch] = useReducer(jugadoresReducer, INITIAL_STATE);

    const agregarJugador1 = (obj: Player) => {
        dispatch({ type: 'agregarJugador1', payload: obj });
    };
    const agregarJugador2 = (obj: Player) => {
        dispatch({ type: 'agregarJugador2', payload: obj });
    };

    const borrarJugador = (id: string) => {
        dispatch({ type: 'borrarJuador', payload: id });
    };
    const borrarEquipo = (equipo: string) => {
        dispatch({ type: 'borrarEquipo', payload: equipo });
    };

    return (
        <JugadoresContext.Provider value={{ jugadoresState, agregarJugador1, agregarJugador2, borrarJugador, borrarEquipo }}>
            {children}
        </JugadoresContext.Provider>
    );
};
