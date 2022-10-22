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

export const animaciones = (segundos: number) => {
    setTimeout(function () {
        const replacers: any = document.querySelectorAll('[data-replace]');
        for (let i = 0; i < replacers.length; i++) {
            const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function (key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, segundos);
};

export const habilitacionDeBotones = (jugadores1: Jugadores, jugadores2: Jugadores, btn1: HTMLElement | null, btn2: HTMLElement | null) => {
    if (jugadores1.length > 4) {
        btn1?.setAttribute('disabled', 'true');
        btn1?.classList.replace('bg-indigo-600', 'bg-gray-400');
        btn1?.classList.replace('hover:bg-indigo-700', 'hover:bg-gray-400');
    } else {
        btn1?.classList.replace('bg-gray-400', 'bg-indigo-600');
        btn1?.classList.replace('hover:bg-gray-400', 'hover:bg-indigo-700');
        btn1?.removeAttribute('disabled');
    }
    if (jugadores2.length > 4) {
        btn2?.setAttribute('disabled', 'true');
        btn2?.classList.replace('bg-indigo-600', 'bg-gray-400');
        btn2?.classList.replace('hover:bg-indigo-700', 'hover:bg-gray-400');
        return;
    } else {
        btn2?.classList.replace('bg-gray-400', 'bg-indigo-600');
        btn2?.classList.replace('hover:bg-gray-400', 'hover:bg-indigo-700');
        btn2?.removeAttribute('disabled');
    }
};
