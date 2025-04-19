import React from 'react';
import { servicios } from '../data/datosDemo';
import CardService from '../components/CardService';
import '../styles/App.css';

const Services = () => {
  return (
    <section>
      <h1>Servicios Profesionales</h1>
      <p>Conecta con expertos en bienes raíces, desde notarios hasta arquitectos y constructoras.</p>

      <div className="grid-container">
        {servicios.map((servicio) => (
          <CardService key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </section>
  );
};

export default Services;
