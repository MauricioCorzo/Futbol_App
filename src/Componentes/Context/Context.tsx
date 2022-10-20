import { createContext } from 'react';
import { Player } from '../../interfaces';
import { initialState } from './Reducer';

type JugadoresContextProps = {
    jugadoresState: initialState;
    agregarJugador: (obj: Player) => void;
};

export const JugadoresContext = createContext<JugadoresContextProps>({} as JugadoresContextProps);
