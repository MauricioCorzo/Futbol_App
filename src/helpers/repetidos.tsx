import { Jugadores } from '../interfaces';

export const comprobarRepetidos = (obj1: Jugadores, obj2: Jugadores, id: number) => {
    return obj1.some((jugador) => jugador.player_key === id) || obj2.some((jugador) => jugador.player_key === id);
};

export const camisetaRandom = () => {
    return Math.floor(Math.random() * 100).toString();
};
