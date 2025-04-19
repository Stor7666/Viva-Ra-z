import React from 'react';
import '../styles/App.css';

const CardProperty = ({ propiedad }) => {
  return (
    <div className="card-property">
      <img src={propiedad.imagen} alt={propiedad.titulo} className="card-img" />
      <div className="card-content">
        <h3>{propiedad.titulo}</h3>
        <p className="descripcion">{propiedad.descripcion}</p>
        <p className="ubicacion">{propiedad.ubicacion}</p>
        <p className="precio">{propiedad.precio}</p>
        <span className="tag">{propiedad.tipo}</span>
      </div>
    </div>
  );
};

export default CardProperty;

