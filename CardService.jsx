import React from 'react';
import '../styles/App.css';

const CardService = ({ servicio }) => {
  return (
    <div className="card-service">
      <img src={servicio.imagen} alt={servicio.nombre} className="card-img" />
      <div className="card-content">
        <h3>{servicio.nombre}</h3>
        <p className="especialidad">{servicio.especialidad}</p>
        <p className="ubicacion">{servicio.ubicacion}</p>
        <p className="descripcion">{servicio.descripcion}</p>
      </div>
    </div>
  );
};

export default CardService;
