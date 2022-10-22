import React from 'react';

const ToastError = () => {
    return (
        <div
            id='myToastError'
            className='flex fixed top-2 right-2 hidden w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-white-800'
            role='alert'
        >
            <div className='flex items-center justify-center w-12 bg-red-500'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 text-white'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                    />
                </svg>
            </div>

            <div className='px-4 py-2 -mx-3'>
                <div className='mx-3'>
                    <span className='font-bold text-indigo-600 dark:text-indigo-600'>¡Upss!</span>
                    <p className='text-sm text-indigo-500 dark:text-indigo-500 font-bold'>Ese jugador ya fue seleccionado. Prueba con otro</p>
                    <button
                        type='button'
                        className='fixed top-5 right-5 btn-close box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                        data-mdb-dismiss='myToast'
                        aria-label='Close'
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default ToastError;
