import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <section className="about-section">
      <h1>Sobre VivaRaiz</h1>
      <p className="intro">
        VivaRaiz es una plataforma integral que transforma la forma de conectar con el mundo inmobiliario.
        Aquí puedes publicar propiedades de todo tipo, contratar servicios profesionales, y colaborar en proyectos.
      </p>

      <div className="about-block">
        <h2>Misión</h2>
        <p>
          Hacer accesible, eficiente y colaborativo el mundo de los bienes raíces para todos, conectando necesidades
          con soluciones, talentos con proyectos, propiedades con oportunidades.
        </p>
      </div>

      <div className="about-block">
        <h2>Visión</h2>
        <p>
          Convertirnos en la plataforma más versátil del mundo inmobiliario digital, donde cualquier persona o empresa
          pueda gestionar, impulsar o colaborar en proyectos desde un solo lugar.
        </p>
      </div>

      <div className="about-block">
        <h2>Propuesta de Valor</h2>
        <ul>
          <li>✔ Plataforma abierta y flexible para todos los tipos de propiedad</li>
          <li>✔ Búsqueda y contratación directa de profesionales</li>
          <li>✔ Publicación de servicios y proyectos colaborativos</li>
          <li>✔ Inclusiva: pensada para todo tipo de usuario y presupuesto</li>
          <li>✔ Fácil de usar, intuitiva y funcional</li>
          <li>✔ Conexiones reales con valor profesional</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
