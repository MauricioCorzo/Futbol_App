import React, { useReducer } from 'react';
import { Player } from '../../interfaces';
import { JugadoresContext } from './Context';
import { INITIAL_STATE, jugadoresReducer } from './Reducer';

interface props {
    children: JSX.Element | JSX.Element[];
}

export const JugadoresProvider = ({ children }: props) => {
    const [jugadoresState, dispatch] = useReducer(jugadoresReducer, INITIAL_STATE);

    const agregarJugador = (obj: Player) => {
        dispatch({ type: 'agregarJugador', payload: obj });
    };

    return <JugadoresContext.Provider value={{ jugadoresState, agregarJugador }}>{children}</JugadoresContext.Provider>;
};
