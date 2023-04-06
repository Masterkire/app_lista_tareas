import React, {useState} from 'react';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return (
        <li className='lista-tareas__tarea'>
            <div onClick={() => toggleCompletada(tarea.id)}>
            {tarea.completada ? 
                <i className="bi bi-check-square-fill lista-tareas__icono lista-tareas__icono-check"></i>
                :
                <i className="bi bi-square-fill lista-tareas__icono lista-tareas__icono-check"></i>
            }
            </div>
            <div className='lista-tareas__texto'>
                {editandoTarea ? 
                    <form className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            className='formulario-editar-tarea__input'
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)} 
                        />
                        <button 
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >
                            Actualizar
                        </button>
                    </form>
                    : tarea.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <i 
                    className="bi bi-pencil-square lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => cambiarEditandoTarea(!editandoTarea)}
                ></i>
                <i 
                    className="bi bi-x-lg lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => borrarTarea(tarea.id)}
                ></i>
            </div>
        </li>
    );
}

export default Tarea;