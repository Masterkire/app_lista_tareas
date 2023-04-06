import React from 'react';

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return (
        <header className='header'>
            <h1 className='header__titulo'>Lista de Tareas</h1>
            {mostrarCompletadas ?
                <button 
                    className='header__boton'
                    onClick={() => toggleCompletadas()}
                >
                    No mostrar completadas
                    <i className="bi bi-eye-slash-fill header__icono-boton"></i>
                </button>
            :
            <button 
                className='header__boton'
                onClick={() => toggleCompletadas()}
            >
                Mostrar completadas
                <i className="bi bi-eye-fill header__icono-boton"></i>
            </button>
            }
        </header>
    );
}

export default Header;