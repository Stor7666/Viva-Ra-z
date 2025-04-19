import React from 'react';
import '../styles/App.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} VivaRaiz. Todos los derechos reservados.</p>
      <p>Conectando oportunidades en el mundo inmobiliario.</p>
    </footer>
  );
};

export default Footer;
