import React from 'react';
import { propiedades } from '../data/datosDemo';
import CardProperty from '../components/CardProperty';
import '../styles/App.css';

const Explore = () => {
  return (
    <section>
      <h1>Explora Propiedades</h1>
      <p>Descubre espacios únicos para uso residencial, comercial o industrial.</p>

      <div className="grid-container">
        {propiedades.map((propiedad) => (
          <CardProperty key={propiedad.id} propiedad={propiedad} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
