import React from 'react';

const ModalFelicitaciones = () => {
    return (
        <div
            id='modalFelicitaciones'
            className='fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5'
        >
            <div className='bg-confeti bg-contain w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]'>
                <h3 className='text-dark mb-5 pb-2 text-xl font-bold sm:text-2xl'>¡Felicitaciones!</h3>
                <p className='mb-10 font-semibold'>
                    Has completado ambos equipos. Sigue disfrutando la App y continúa modificando a tu gusto los equipos.
                </p>
                <div className='-mx-3 flex flex-wrap'>
                    <button
                        onClick={() => {
                            document.getElementById('modalFelicitaciones')?.classList.add('hidden');
                        }}
                        className='bg-primary bg-indigo-600 border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90 '
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalFelicitaciones;
