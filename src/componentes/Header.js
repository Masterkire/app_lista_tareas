import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__titulo'>Lista de Tareas</h1>
            <button className='header__boton'>
                No mostrar completadas
                {/* <i className="bi bi-eye-fill"></i> */}
                <i className="bi bi-eye-slash-fill header__icono-boton"></i>
            </button>
        </header>
    );
}

export default Header;