import React from 'react';
import FormPublish from '../components/FormPublish';
import '../styles/App.css';

const Publish = () => {
  return (
    <section className="publish-section">
      <h1>Publica tu oportunidad</h1>
      <p>Sube una propiedad, servicio o proyecto y conéctate con quien lo necesita.</p>
      <FormPublish />
    </section>
  );
};

export default Publish;
