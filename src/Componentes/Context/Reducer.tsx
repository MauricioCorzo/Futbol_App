import { Jugadores, Player } from '../../interfaces';

export interface initialState {
    jugadores: Jugadores;
}

type ActionTypes = { type: 'agregarJugador'; payload: Player } | { type: 'borrarJuador'; payload: { id: string } } | { type: 'borrarEquipo' };

export const INITIAL_STATE: initialState = {
    jugadores: [],
};

export const jugadoresReducer = (state: initialState, action: ActionTypes): initialState => {
    switch (action.type) {
        case 'agregarJugador':
            return { ...state, jugadores: [...state.jugadores, action.payload] };

        default:
            return { ...state };
    }
};
