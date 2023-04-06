import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false,
                }
            ]
        );
        cambiarInputTarea('');
    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='formulario-tareas__input' 
                placeholder='Escribe una tarea'
                value={inputTarea}
                onChange={(e) => handleInput(e)}  
            />
            <button 
                type='submit'
                className='formulario-tareas__btn'
            >
                <i className="bi bi-plus-square-fill formulario-tareas__icono-btn"></i>
            </button>
        </form>
    );
}

export default FormularioTareas;