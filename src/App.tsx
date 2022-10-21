import React from 'react';
import { JugadoresProvider } from './Context/Provider';
import { Equipos } from './Componentes/Equipos';
import Formulario from './Componentes/Formulario';

import Toast from './Componentes/Toast';
import ToastError from './Componentes/ToastError';

function App() {
    return (
        <>
            <JugadoresProvider>
                <div className='grid md:grid-cols-3 md:gap-2 grid-cols-1'>
                    <Formulario />

                    <Equipos />

                    {/* <div className='my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>3</div> */}

                    <Toast />
                    <ToastError />
                </div>
            </JugadoresProvider>
        </>
    );
}

export default App;
