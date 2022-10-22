/* eslint-disable no-fallthrough */
import { Jugadores, Player } from '../interfaces';

export interface initialState {
    jugadores1: Jugadores;
    jugadores2: Jugadores;
}

type ActionTypes =
    | { type: 'agregarJugador1'; payload: Player }
    | { type: 'agregarJugador2'; payload: Player }
    | { type: 'borrarJuador'; payload: string }
    | { type: 'borrarEquipo'; payload: string };

export const INITIAL_STATE: initialState = {
    jugadores1: [],
    jugadores2: [],
};

export const jugadoresReducer = (state: initialState, action: ActionTypes): initialState => {
    switch (action.type) {
        case 'agregarJugador1':
            return { ...state, jugadores1: [...state.jugadores1, action.payload] };

        case 'agregarJugador2':
            return { ...state, jugadores2: [...state.jugadores2, action.payload] };

        case 'borrarJuador':
            return {
                ...state,
                jugadores1: state.jugadores1.filter((jug) => jug.player_id !== action.payload),
                jugadores2: state.jugadores2.filter((jug) => jug.player_id !== action.payload),
            };
        case 'borrarEquipo':
            if (action.payload == 'A') {
                return { ...state, jugadores1: [] };
            }
            if (action.payload == 'B') {
                return { ...state, jugadores2: [] };
            }

        default:
            return { ...state };
    }
};
