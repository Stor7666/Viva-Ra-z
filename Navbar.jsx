import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/" className="nav-logo">VivaRaiz</Link>
      </div>
      <div className="nav-links">
        <Link to="/explore">Explorar</Link>
        <Link to="/publish">Publicar</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/about">Sobre Nosotros</Link>
      </div>
    </nav>
  );
};

export default Navbar;
