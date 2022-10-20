import React from 'react';
import { JugadoresProvider } from './Componentes/Context/Provider';
import Formulario from './Componentes/Formulario';
import ListaJugadores from './Componentes/ListaJugadores';
import Toast from './Componentes/Toast';

function App() {
    return (
        <>
            <JugadoresProvider>
                <div className='grid md:grid-cols-3 md:gap-2 grid-cols-1'>
                    <Formulario />

                    <ListaJugadores />

                    <div className='my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>3</div>

                    <Toast />
                </div>
            </JugadoresProvider>
        </>
    );
}

export default App;
