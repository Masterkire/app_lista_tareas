import React, { useState, useEffect } from "react";
import "./App.css";
import FormularioTareas from "./componentes/FormularioTareas";
import Header from "./componentes/Header";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  // Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem('tareas') 
    ? 
    JSON.parse(localStorage.getItem('tareas'))
    : 
    [];
    // Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Estamos guardando el estado dentro de local storage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Acceder a localStorage y comprobamos si tiene un valor null

  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // Mostrar completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        cambiarTareas={cambiarTareas}
        tareas={tareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
