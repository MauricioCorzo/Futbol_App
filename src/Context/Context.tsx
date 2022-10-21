import { createContext } from 'react';
import { Player } from '../interfaces';
import { initialState } from './Reducer';

type JugadoresContextProps = {
    jugadoresState: initialState;
    agregarJugador1: (obj: Player) => void;
    agregarJugador2: (obj: Player) => void;
    borrarJugador: (id: string) => void;
};

export const JugadoresContext = createContext<JugadoresContextProps>({} as JugadoresContextProps);
