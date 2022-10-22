import React, { useContext } from 'react';
import { JugadoresContext } from '../Context/Context';
import { Equipos } from '../Componentes/Equipos';
import Formulario from '../Componentes/Formulario';
import Toast from '../Modals/Toast';
import ToastError from '../Modals/ToastError';

const Home = () => {
    const { jugadoresState } = useContext(JugadoresContext);

    const { jugadores1, jugadores2 } = jugadoresState;
    return (
        <div className='bg-home bg-cover  bg-no-repeat bg-bottom min-h-screen'>
            <div
                className={`${
                    jugadores1.length == 0 && jugadores2.length == 0
                        ? 'grid md:grid-cols-2 md:gap-2 grid-cols-1'
                        : 'grid md:grid-cols-3 md:gap-2 grid-cols-1'
                }`}
            >
                <Formulario />

                <Equipos />

                <Toast />
                <ToastError />
            </div>
        </div>
    );
};

export default Home;
