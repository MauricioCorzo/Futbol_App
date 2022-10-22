import axios, { AxiosResponse } from 'axios';
import { Jugadores } from '../interfaces';

export const comprobarRepetidos = (obj1: Jugadores, obj2: Jugadores, id: number) => {
    return obj1.some((jugador) => jugador.player_key === id) || obj2.some((jugador) => jugador.player_key === id);
};

export const camisetaRandom = () => {
    return Math.floor(Math.random() * 100).toString();
};

export const comprobarImagen = async (url: string): Promise<string | undefined> => {
    try {
        const response: AxiosResponse = await axios(`${url}`);
        if (response) {
            return response.statusText;
        }
    } catch (error: any) {
        return error.toJSON().message;
    }
};

export const animaciones = () => {
    setTimeout(function () {
        const replacers = document.querySelectorAll('[data-replace]');
        for (let i = 0; i < replacers.length; i++) {
            const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function (key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 1000);
};
