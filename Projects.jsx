import React from 'react';
import { proyectos } from '../data/datosDemo';
import '../styles/App.css';

const Projects = () => {
  return (
    <section>
      <h1>Proyectos Colaborativos</h1>
      <p>Impulsa, únete o descubre proyectos inmobiliarios en desarrollo.</p>

      <div className="grid-container">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="card-property">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="card-img" />
            <div className="card-content">
              <h3>{proyecto.titulo}</h3>
              <p className="descripcion">{proyecto.descripcion}</p>
              <p className="ubicacion">{proyecto.ubicacion}</p>
              <span className="tag">Creado por: {proyecto.creador}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
